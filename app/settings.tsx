import React, { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, Sun1, Moon, Lock, Key, ExportCurve, ImportCurve } from 'iconsax-react-native';
import { useTheme } from 'src/contexts/ThemeContext';
import { useLockStore } from 'src/stores/lockStore';
import { useLock } from 'src/contexts/LockContext';
import { impactAsync } from 'src/utils/haptics';
import {
  saveBackupToStorage,
  getSavedBackup,
  restoreBackup,
  getBackupJSON,
} from 'src/storage/backup';

export default function SettingsScreen() {
  const { theme, availableThemes, selectTheme, toggleScheme } = useTheme();
  const { colors, isDark, definition } = theme;
  const hasPin = useLockStore((s) => s.hasPin());
  const setPin = useLockStore((s) => s.setPin);
  const clearPin = useLockStore((s) => s.clearPin);
  const { lockApp } = useLock();

  const [showSetPin, setShowSetPin] = useState(false);
  const [newPin, setNewPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  const handleExportBackup = () => {
    getBackupJSON();
    saveBackupToStorage();
    Alert.alert(
      'Backup Saved',
      'All data has been backed up to local storage. The backup JSON is ready for export.'
    );
  };

  const handleRestoreBackup = () => {
    const backup = getSavedBackup();
    if (!backup) {
      Alert.alert('No Backup', 'No saved backup found. Create a backup first.');
      return;
    }
    Alert.alert(
      'Restore Backup',
      `Restore backup from ${new Date(backup.createdAt).toLocaleDateString()}?\n${backup.profiles.length} profiles, ${backup.journalEntries.length} journal entries.`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Restore',
          style: 'destructive',
          onPress: () => {
            restoreBackup(backup);
            Alert.alert(
              'Restored',
              'Backup has been restored. Restart the app for changes to take full effect.'
            );
          },
        },
      ]
    );
  };

  const handleSetPin = () => {
    if (newPin.length !== 4 || confirmPin.length !== 4) {
      Alert.alert('Validation', 'PIN must be 4 digits.');
      return;
    }
    if (newPin !== confirmPin) {
      Alert.alert('Validation', 'PINs do not match.');
      return;
    }
    setPin(newPin);
    setShowSetPin(false);
    setNewPin('');
    setConfirmPin('');
    Alert.alert('PIN Set', 'App lock PIN has been saved.');
  };

  const handleClearPin = () => {
    Alert.alert('Clear PIN', 'Are you sure you want to remove the app lock?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Clear', style: 'destructive', onPress: () => clearPin() },
    ]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderBottomWidth: 1,
          borderBottomColor: colors.outlineVariant,
        }}>
        <TouchableOpacity
          onPress={() => router.back()}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          <ArrowLeft size={24} color={colors.onSurface} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: colors.onSurface,
            marginLeft: 16,
          }}>
          Settings
        </Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: colors.onSurfaceVariant,
            marginBottom: 12,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}>
          Appearance
        </Text>

        <TouchableOpacity
          onPress={() => {
            impactAsync('light');
            toggleScheme();
          }}
          accessibilityRole="button"
          accessibilityLabel="Toggle dark mode"
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 14,
            paddingHorizontal: 16,
            backgroundColor: colors.surfaceVariant,
            borderRadius: 12,
            marginBottom: 24,
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            {isDark ? (
              <Moon size={20} color={colors.onSurface} />
            ) : (
              <Sun1 size={20} color={colors.onSurface} />
            )}
            <Text style={{ fontSize: 16, color: colors.onSurface, fontWeight: '500' }}>
              Dark Mode
            </Text>
          </View>
          <View
            style={{
              width: 44,
              height: 24,
              borderRadius: 12,
              backgroundColor: isDark ? colors.primary : colors.outline,
              padding: 2,
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                alignSelf: isDark ? 'flex-end' : 'flex-start',
              }}
            />
          </View>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: colors.onSurfaceVariant,
            marginBottom: 12,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}>
          Theme — {definition.name}
        </Text>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}>
          {availableThemes.map((t) => {
            const active = t.id === theme.id;
            return (
              <TouchableOpacity
                key={t.id}
                onPress={() => {
                  impactAsync('light');
                  selectTheme(t.id);
                }}
                accessibilityRole="button"
                accessibilityLabel={`Select ${t.name} theme`}
                style={{
                  width: '47%',
                  borderRadius: 16,
                  borderWidth: active ? 2 : 1,
                  borderColor: active ? t.colors.primary : colors.outlineVariant,
                  backgroundColor: t.colors.surface,
                  padding: 12,
                  marginBottom: 4,
                }}>
                <View style={{ flexDirection: 'row', gap: 6, marginBottom: 8 }}>
                  {[t.colors.primary, t.colors.secondary, t.colors.accent].map((color, i) => (
                    <View
                      key={i}
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        backgroundColor: color,
                      }}
                    />
                  ))}
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '600',
                    color: t.colors.primary,
                    marginBottom: 2,
                  }}
                  numberOfLines={1}>
                  {t.name}
                </Text>
                <Text
                  style={{ fontSize: 11, color: t.colors.text, opacity: 0.6 }}
                  numberOfLines={1}>
                  {t.feel.slice(0, 2).join(' \u00b7 ')}
                </Text>
                {t.type && (
                  <View
                    style={{
                      alignSelf: 'flex-start',
                      marginTop: 6,
                      paddingHorizontal: 8,
                      paddingVertical: 2,
                      borderRadius: 6,
                      backgroundColor: t.colors.primary + '30',
                    }}>
                    <Text style={{ fontSize: 10, color: t.colors.primary, fontWeight: '600' }}>
                      {t.type}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: colors.onSurfaceVariant,
            marginBottom: 12,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}>
          App Lock
        </Text>

        <TouchableOpacity
          onPress={() => {
            impactAsync('light');
            if (hasPin) lockApp();
            else setShowSetPin(true);
          }}
          accessibilityRole="button"
          accessibilityLabel={hasPin ? 'Lock app now' : 'Set app lock PIN'}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 14,
            paddingHorizontal: 16,
            backgroundColor: colors.surfaceVariant,
            borderRadius: 12,
            marginBottom: 8,
          }}>
          <Lock size={20} color={colors.onSurface} style={{ marginRight: 10 }} />
          <Text style={{ fontSize: 16, color: colors.onSurface, fontWeight: '500', flex: 1 }}>
            {hasPin ? 'Lock App Now' : 'Set App Lock PIN'}
          </Text>
          <View
            style={{
              width: 44,
              height: 24,
              borderRadius: 12,
              backgroundColor: hasPin ? colors.primary : colors.outline,
              padding: 2,
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                alignSelf: hasPin ? 'flex-end' : 'flex-start',
              }}
            />
          </View>
        </TouchableOpacity>

        {showSetPin && (
          <View
            style={{
              backgroundColor: colors.surfaceVariant,
              borderRadius: 12,
              padding: 14,
              marginBottom: 8,
            }}>
            <TextInput
              style={{
                backgroundColor: colors.background,
                borderRadius: 10,
                paddingHorizontal: 14,
                paddingVertical: 12,
                fontSize: 18,
                color: colors.onSurface,
                textAlign: 'center',
                letterSpacing: 8,
                marginBottom: 8,
              }}
              placeholder="New PIN"
              placeholderTextColor={colors.onSurfaceVariant}
              value={newPin}
              onChangeText={setNewPin}
              keyboardType="number-pad"
              maxLength={4}
              secureTextEntry
            />
            <TextInput
              style={{
                backgroundColor: colors.background,
                borderRadius: 10,
                paddingHorizontal: 14,
                paddingVertical: 12,
                fontSize: 18,
                color: colors.onSurface,
                textAlign: 'center',
                letterSpacing: 8,
                marginBottom: 8,
              }}
              placeholder="Confirm PIN"
              placeholderTextColor={colors.onSurfaceVariant}
              value={confirmPin}
              onChangeText={setConfirmPin}
              keyboardType="number-pad"
              maxLength={4}
              secureTextEntry
            />
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <TouchableOpacity
                onPress={() => {
                  setShowSetPin(false);
                  setNewPin('');
                  setConfirmPin('');
                }}
                style={{
                  flex: 1,
                  paddingVertical: 10,
                  borderRadius: 8,
                  backgroundColor: colors.outline,
                  alignItems: 'center',
                }}>
                <Text style={{ fontSize: 14, fontWeight: '600', color: colors.onSurface }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSetPin}
                style={{
                  flex: 1,
                  paddingVertical: 10,
                  borderRadius: 8,
                  backgroundColor: colors.primary,
                  alignItems: 'center',
                }}>
                <Text style={{ fontSize: 14, fontWeight: '600', color: colors.onPrimary }}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {hasPin && (
          <TouchableOpacity
            onPress={() => {
              impactAsync('medium');
              handleClearPin();
            }}
            accessibilityRole="button"
            accessibilityLabel="Remove PIN lock"
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 14,
              paddingHorizontal: 16,
              backgroundColor: colors.surfaceVariant,
              borderRadius: 12,
              marginBottom: 24,
            }}>
            <Key size={20} color={colors.error} style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 16, color: colors.error, fontWeight: '500' }}>
              Remove PIN Lock
            </Text>
          </TouchableOpacity>
        )}

        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: colors.onSurfaceVariant,
            marginBottom: 12,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}>
          Data Management
        </Text>

        <TouchableOpacity
          onPress={() => {
            impactAsync('light');
            handleExportBackup();
          }}
          accessibilityRole="button"
          accessibilityLabel="Export backup"
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 14,
            paddingHorizontal: 16,
            backgroundColor: colors.surfaceVariant,
            borderRadius: 12,
            marginBottom: 8,
          }}>
          <ExportCurve size={20} color={colors.onSurface} style={{ marginRight: 10 }} />
          <Text style={{ fontSize: 16, color: colors.onSurface, fontWeight: '500' }}>
            Export Backup
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            impactAsync('medium');
            handleRestoreBackup();
          }}
          accessibilityRole="button"
          accessibilityLabel="Restore backup"
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 14,
            paddingHorizontal: 16,
            backgroundColor: colors.surfaceVariant,
            borderRadius: 12,
          }}>
          <ImportCurve size={20} color={colors.onSurface} style={{ marginRight: 10 }} />
          <Text style={{ fontSize: 16, color: colors.onSurface, fontWeight: '500' }}>
            Restore Backup
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: colors.onSurfaceVariant,
            marginBottom: 12,
            marginTop: 32,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}>
          NUMO Pro
        </Text>

        <View
          style={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 12,
            padding: 14,
            marginBottom: 8,
          }}>
          <Text
            style={{
              fontSize: 13,
              color: colors.onSurfaceVariant,
              lineHeight: 18,
              marginBottom: 12,
            }}>
            Unlock the full NUMO experience with premium features. Support development and get
            access to advanced tools.
          </Text>
          {[
            {
              icon: '\u2B50',
              label: 'Advanced Reports',
              desc: 'In-depth analysis with detailed breakdowns',
            },
            {
              icon: '\u2665\uFE0F',
              label: 'Unlimited Compatibility',
              desc: 'Compare unlimited profiles',
            },
            {
              icon: '\uD83D\uDCCA',
              label: 'Business Numerology',
              desc: 'Company & product name analysis',
            },
            {
              icon: '\uD83D\uDC76',
              label: 'Baby Name Analysis',
              desc: 'Find the perfect name for your baby',
            },
            {
              icon: '\uD83D\uDCC4',
              label: 'PDF Export',
              desc: 'Branded PDF reports without watermark',
            },
            {
              icon: '\uD83E\uDD16',
              label: 'AI Coach (Online)',
              desc: 'Personalized AI numerology guidance',
            },
          ].map((feat, i) => (
            <View
              key={i}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                borderBottomWidth: i < 5 ? 1 : 0,
                borderBottomColor: colors.outlineVariant,
              }}>
              <Text style={{ fontSize: 18, marginRight: 12 }}>{feat.icon}</Text>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: '600', color: colors.onSurface }}>
                  {feat.label}
                </Text>
                <Text style={{ fontSize: 12, color: colors.onSurfaceVariant }}>{feat.desc}</Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 3,
                  borderRadius: 6,
                  backgroundColor: colors.primary + '30',
                }}>
                <Text style={{ fontSize: 10, color: colors.primary, fontWeight: '700' }}>PRO</Text>
              </View>
            </View>
          ))}
        </View>

        <Text
          style={{
            fontSize: 11,
            color: colors.onSurfaceVariant,
            textAlign: 'center',
            marginTop: 16,
          }}>
          NUMO v1.0.0 Prototype \u2014 All features shown work fully offline
        </Text>
      </ScrollView>
    </View>
  );
}
