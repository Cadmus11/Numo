import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'src/contexts/ThemeContext';
import { usePremiumStore } from 'src/stores/premiumStore';
import type { FeatureId } from 'src/data/featureFlags';
import { FEATURE_MAP } from 'src/data/featureFlags';

interface PremiumGateProps {
  featureId: FeatureId;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function PremiumGate({ featureId, children, fallback }: PremiumGateProps) {
  const isFeatureUnlocked = usePremiumStore((s) => s.isFeatureUnlocked);
  const { theme } = useTheme();
  const { colors } = theme;

  if (isFeatureUnlocked(featureId)) {
    return <>{children}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  const feature = FEATURE_MAP[featureId];

  return (
    <View style={{ backgroundColor: colors.surfaceVariant, borderRadius: 12, padding: 14, marginBottom: 8, alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 8 }}>{feature?.icon ?? '\uD83D\uDD12'}</Text>
      <Text style={{ fontSize: 15, fontWeight: '700', color: colors.onSurface, marginBottom: 4 }}>
        Premium Feature
      </Text>
      <Text style={{ fontSize: 13, color: colors.onSurfaceVariant, textAlign: 'center', marginBottom: 8 }}>
        {feature?.description ?? 'This feature is available in NUMO Pro.'}
      </Text>
      <View style={{ paddingHorizontal: 12, paddingVertical: 4, borderRadius: 8, backgroundColor: colors.primary + '30' }}>
        <Text style={{ fontSize: 11, fontWeight: '700', color: colors.primary }}>NUMO PRO</Text>
      </View>
    </View>
  );
}
