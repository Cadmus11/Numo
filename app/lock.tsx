import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { Key } from 'iconsax-react-native';
import { useTheme } from 'src/contexts/ThemeContext';
import { useLock } from 'src/contexts/LockContext';
import { useLockStore } from 'src/stores/lockStore';
import { impactAsync } from 'src/utils/haptics';

export default function LockScreen() {
  const { theme } = useTheme();
  const { colors } = theme;
  const { unlockApp, setShowLockScreen } = useLock();
  const validatePin = useLockStore((s) => s.validatePin);
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [mode, setMode] = useState<'unlock' | 'set' | 'confirm' | 'change'>('unlock');
  const [newPin, setNewPin] = useState('');
  const firstPin = useRef('');
  const hasPin = useLockStore((s) => s.hasPin());
  const setPinStore = useLockStore((s) => s.setPin);
  const clearPin = useLockStore((s) => s.clearPin);

  React.useEffect(() => {
    if (!hasPin) {
      setMode('set');
    }
  }, [hasPin]);

  const handleDigit = (d: string) => {
    impactAsync('light');
    setError('');
    if (mode === 'unlock' || mode === 'change') {
      const next = (pin + d).slice(0, 4);
      setPin(next);
      if (next.length === 4) {
        if (validatePin(next)) {
          unlockApp();
          if (router.canGoBack()) router.back();
        } else {
          setError('Incorrect PIN');
          setPin('');
        }
      }
    } else {
      const next = (newPin + d).slice(0, 4);
      setNewPin(next);
      if (next.length === 4) {
        if (mode === 'set') {
          firstPin.current = next;
          setNewPin('');
          setMode('confirm');
        } else if (mode === 'confirm') {
          if (next === firstPin.current) {
            setPinStore(next);
            setMode('unlock');
          } else {
            setError('PINs do not match');
            setNewPin('');
          }
          if (next === firstPin.current) {
            if (router.canGoBack()) router.back();
          }
        }
      }
    }
  };

  const handleDelete = () => {
    if (mode === 'unlock' || mode === 'change') {
      setPin((prev) => prev.slice(0, -1));
    } else {
      setNewPin((prev) => prev.slice(0, -1));
    }
    setError('');
  };

  const handleCancel = () => {
    clearPin();
    setShowLockScreen(false);
    if (router.canGoBack()) router.back();
  };

  const currentPin = mode === 'unlock' || mode === 'change' ? pin : newPin;

  const getTitle = () => {
    if (mode === 'unlock') return 'Enter PIN';
    if (mode === 'set') return 'Set a 4-digit PIN';
    if (mode === 'confirm') return 'Confirm PIN';
    return 'Enter PIN';
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
      }}>
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          backgroundColor: colors.primaryContainer,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 16,
        }}>
        <Key size={28} color={colors.onPrimaryContainer} />
      </View>

      <Text style={{ fontSize: 20, fontWeight: '700', color: colors.onSurface, marginBottom: 4 }}>
        {getTitle()}
      </Text>
      {error ? (
        <Text style={{ fontSize: 14, color: colors.error, marginBottom: 8 }}>{error}</Text>
      ) : null}

      <View style={{ flexDirection: 'row', gap: 12, marginVertical: 24 }}>
        {[0, 1, 2, 3].map((i) => (
          <View
            key={i}
            style={{
              width: 16,
              height: 16,
              borderRadius: 8,
              backgroundColor: i < currentPin.length ? colors.primary : colors.outlineVariant,
            }}
          />
        ))}
      </View>

      <View style={{ width: '100%', maxWidth: 280 }}>
        {[
          ['1', '2', '3'],
          ['4', '5', '6'],
          ['7', '8', '9'],
        ].map((row, ri) => (
          <View
            key={ri}
            style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 }}>
            {row.map((d) => (
              <TouchableOpacity
                key={d}
                onPress={() => handleDigit(d)}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 32,
                  backgroundColor: colors.surfaceVariant,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{ fontSize: 24, fontWeight: '600', color: colors.onSurface }}>
                  {d}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 }}>
          <TouchableOpacity
            onPress={handleCancel}
            style={{ width: 64, height: 64, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 13, color: colors.onSurfaceVariant, fontWeight: '500' }}>
              {hasPin ? 'Clear' : ''}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleDigit('0')}
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              backgroundColor: colors.surfaceVariant,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 24, fontWeight: '600', color: colors.onSurface }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDelete}
            style={{ width: 64, height: 64, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 13, color: colors.onSurfaceVariant, fontWeight: '500' }}>
              DEL
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
