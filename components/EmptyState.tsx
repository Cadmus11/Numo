import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface EmptyStateProps {
  icon?: string;
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onAction?: () => void;
  colors: {
    background: string;
    onSurface: string;
    onSurfaceVariant: string;
    primary: string;
    onPrimary: string;
  };
}

export function EmptyState({ icon, title, subtitle, actionLabel, onAction, colors }: EmptyStateProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32 }}>
      {icon ? <Text style={{ fontSize: 48, marginBottom: 12 }}>{icon}</Text> : null}
      <Text style={{ fontSize: 16, fontWeight: '600', color: colors.onSurface, textAlign: 'center', marginBottom: subtitle ? 4 : 0 }}>
        {title}
      </Text>
      {subtitle ? (
        <Text style={{ fontSize: 14, color: colors.onSurfaceVariant, textAlign: 'center', lineHeight: 20 }}>
          {subtitle}
        </Text>
      ) : null}
      {actionLabel && onAction ? (
        <TouchableOpacity
          onPress={onAction}
          style={{ backgroundColor: colors.primary, borderRadius: 10, paddingVertical: 12, paddingHorizontal: 24, marginTop: 16 }}
          accessibilityRole="button"
          accessibilityLabel={actionLabel}
        >
          <Text style={{ fontSize: 15, fontWeight: '600', color: colors.onPrimary }}>{actionLabel}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
