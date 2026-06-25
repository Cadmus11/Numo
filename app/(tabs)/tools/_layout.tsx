import React from 'react';
import { Stack } from 'expo-router';
import { useTheme } from 'src/contexts/ThemeContext';

export default function ToolsLayout() {
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.surface },
        headerTintColor: colors.onSurface,
        headerTitleStyle: { fontWeight: '600' },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Tools' }} />
      <Stack.Screen name="name" options={{ title: 'Name Analysis' }} />
      <Stack.Screen name="business" options={{ title: 'Business Numerology' }} />
      <Stack.Screen name="phone" options={{ title: 'Phone Numerology' }} />
      <Stack.Screen name="house" options={{ title: 'House Numerology' }} />
      <Stack.Screen name="baby" options={{ title: 'Baby Name Analyzer' }} />
      <Stack.Screen name="knowledge/index" options={{ title: 'Knowledge Library' }} />
      <Stack.Screen name="knowledge/[id]" options={{ title: 'Article' }} />
    </Stack>
  );
}
