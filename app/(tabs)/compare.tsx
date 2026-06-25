import React, { useMemo, useState } from 'react';
import { Text, TouchableOpacity, View, FlatList, Modal } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'src/contexts/ThemeContext';
import { useProfileStore } from 'src/stores/profileStore';
import { impactAsync } from 'src/utils/haptics';
import { calculateFullProfile } from 'src/engine';
import { compareProfiles } from 'src/engine/combined';
import { CompatibilityResult } from 'components/CompatibilityResult';
import type { Profile } from 'src/types/profile';

function parseDate(dateStr: string): { day: number; month: number; year: number } {
  const parts = dateStr.split('-');
  return {
    year: parseInt(parts[0], 10),
    month: parseInt(parts[1], 10),
    day: parseInt(parts[2], 10),
  };
}

function getName(p: Profile): string {
  return [p.firstName, p.lastName].filter(Boolean).join(' ');
}

export default function CompareScreen() {
  const { theme } = useTheme();
  const { colors } = theme;
  const insets = useSafeAreaInsets();
  const profiles = useProfileStore((s) => s.profiles);
  const getProfile = useProfileStore((s) => s.getProfile);

  const [profileAId, setProfileAId] = useState<string | null>(null);
  const [profileBId, setProfileBId] = useState<string | null>(null);
  const [pickerFor, setPickerFor] = useState<'A' | 'B' | null>(null);

  const profileA = profileAId ? getProfile(profileAId) ?? null : null;
  const profileB = profileBId ? getProfile(profileBId) ?? null : null;

  const result = useMemo(() => {
    if (!profileA || !profileB) return null;
    try {
      const dateA = parseDate(profileA.dateOfBirth);
      const dateB = parseDate(profileB.dateOfBirth);
      const reportA = calculateFullProfile({
        firstName: profileA.firstName,
        middleName: profileA.middleName,
        lastName: profileA.lastName,
        nickname: profileA.nickname,
        birthDay: dateA.day,
        birthMonth: dateA.month,
        birthYear: dateA.year,
      });
      const reportB = calculateFullProfile({
        firstName: profileB.firstName,
        middleName: profileB.middleName,
        lastName: profileB.lastName,
        nickname: profileB.nickname,
        birthDay: dateB.day,
        birthMonth: dateB.month,
        birthYear: dateB.year,
      });
      return compareProfiles(reportA, reportB, dateA.year, dateB.year);
    } catch {
      return null;
    }
  }, [profileA, profileB]);

  const selectedProfiles = profiles.filter(
    (p) => p.id !== (pickerFor === 'A' ? profileAId : profileBId)
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderBottomWidth: 1,
          borderBottomColor: colors.outlineVariant,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: '700', color: colors.onSurface }}>
          Compatibility
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16,
          gap: 12,
        }}
      >
        <ProfilePickerButton
          label="Profile A"
          profile={profileA}
          onPress={() => { impactAsync('light'); setPickerFor('A'); }}
          colors={colors}
        />
        <Text style={{ fontSize: 18, fontWeight: '700', color: colors.primary }}>&</Text>
        <ProfilePickerButton
          label="Profile B"
          profile={profileB}
          onPress={() => { impactAsync('light'); setPickerFor('B'); }}
          colors={colors}
        />
      </View>

      {!result && profileA && profileB && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 14, color: colors.onSurfaceVariant }}>
            Unable to calculate compatibility.
          </Text>
        </View>
      )}

      {!profileA || !profileB ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32 }}>
          <Text style={{ fontSize: 15, color: colors.onSurfaceVariant, textAlign: 'center', lineHeight: 22 }}>
            Select two profiles to compare their numerology and zodiac compatibility.
          </Text>
        </View>
      ) : null}

      {result && (
        <CompatibilityResult
          result={result}
          nameA={getName(profileA!)}
          nameB={getName(profileB!)}
        />
      )}

      <Modal
        visible={pickerFor !== null}
        transparent
        animationType="slide"
        onRequestClose={() => setPickerFor(null)}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View
            style={{
              flex: 1,
              marginTop: insets.top + 80,
              backgroundColor: colors.surface,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingTop: 16,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 16,
                marginBottom: 12,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: '700', color: colors.onSurface }}>
                Select Profile {pickerFor}
              </Text>
              <TouchableOpacity onPress={() => setPickerFor(null)}>
                <Text style={{ fontSize: 16, color: colors.primary, fontWeight: '600' }}>Done</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={profiles}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              renderItem={({ item }) => {
                const isSelected =
                  (pickerFor === 'A' && item.id === profileAId) ||
                  (pickerFor === 'B' && item.id === profileBId);
                return (
                  <TouchableOpacity
                    onPress={() => {
                      if (pickerFor === 'A') setProfileAId(item.id);
                      else setProfileBId(item.id);
                      setPickerFor(null);
                    }}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: 14,
                      paddingHorizontal: 12,
                      backgroundColor: isSelected ? colors.primaryContainer : 'transparent',
                      borderRadius: 12,
                      marginBottom: 4,
                    }}
                  >
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: colors.primaryContainer,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 12,
                      }}
                    >
                      <Text style={{ fontSize: 16, color: colors.primary, fontWeight: '700' }}>
                        {item.firstName[0]}{item.lastName[0]}
                      </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 15, fontWeight: '600', color: colors.onSurface }}>
                        {getName(item)}
                      </Text>
                      <Text style={{ fontSize: 12, color: colors.onSurfaceVariant }}>
                        {item.dateOfBirth} {'\u2022'} {item.type}
                      </Text>
                    </View>
                    {isSelected && (
                      <View
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: colors.primary,
                        }}
                      />
                    )}
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

function ProfilePickerButton({
  label,
  profile,
  onPress,
  colors,
}: {
  label: string;
  profile: Profile | null;
  onPress: () => void;
  colors: any;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        paddingVertical: 14,
        paddingHorizontal: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.outlineVariant,
        backgroundColor: colors.surfaceVariant,
        alignItems: 'center',
      }}
    >
      {profile ? (
        <>
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: colors.primaryContainer,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 6,
            }}
          >
            <Text style={{ fontSize: 14, color: colors.primary, fontWeight: '700' }}>
              {profile.firstName[0]}{profile.lastName[0]}
            </Text>
          </View>
          <Text style={{ fontSize: 13, fontWeight: '600', color: colors.onSurface }} numberOfLines={1}>
            {label === 'Profile A' ? profile.firstName : profile.firstName}
          </Text>
        </>
      ) : (
        <>
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: colors.outlineVariant,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 6,
            }}
          >
            <Text style={{ fontSize: 18, color: colors.onSurfaceVariant }}>?</Text>
          </View>
          <Text style={{ fontSize: 12, color: colors.onSurfaceVariant }}>{label}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}
