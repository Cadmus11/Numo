import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import '../global.css';
import { ThemeProvider, useTheme } from 'src/contexts/ThemeContext';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { LockProvider, useLock } from 'src/contexts/LockContext';
import { useSplashStore } from 'src/stores/splashStore';
import LockScreen from './lock';
import SplashScreen from './splash';

function RootLayoutInner() {
  const { theme } = useTheme();
  const { colors, isDark } = theme;
  const { showLockScreen } = useLock();
  const hasSeenSplash = useSplashStore((s) => s.hasSeenSplash);
  const [hydrated, setHydrated] = useState(useSplashStore.persist.hasHydrated());

  useEffect(() => {
    const unsub = useSplashStore.persist.onFinishHydration(() => setHydrated(true));
    return unsub;
  }, []);

  if (!hydrated || !hasSeenSplash) {
    return (
      <View style={{ flex: 1, backgroundColor: '#0F0B1D' }}>
        <StatusBar style="light" />
        <SplashScreen />
      </View>
    );
  }

  if (showLockScreen) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <StatusBar style={isDark ? 'light' : 'dark'} />
        <LockScreen />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <ErrorBoundary>
        <Slot />
      </ErrorBoundary>
    </View>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <LockProvider>
          <RootLayoutInner />
        </LockProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
