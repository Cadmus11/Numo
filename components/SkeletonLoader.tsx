import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

interface SkeletonLoaderProps {
  width?: number | string;
  height?: number;
  borderRadius?: number;
  style?: any;
}

export function SkeletonLoader({
  width = '100%',
  height = 16,
  borderRadius = 8,
  style,
}: SkeletonLoaderProps) {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0.3, duration: 800, useNativeDriver: true }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        { width: width as any, height, borderRadius, backgroundColor: '#1A162A', opacity },
        style,
      ]}
      accessibilityLabel="Loading"
      accessibilityRole="progressbar"
    />
  );
}

export function CardSkeleton({ colors }: { colors: any }) {
  return (
    <View
      style={{
        backgroundColor: colors.surfaceVariant,
        borderRadius: 12,
        padding: 14,
        marginBottom: 10,
      }}>
      <SkeletonLoader width="60%" height={14} borderRadius={6} />
      <SkeletonLoader width="40%" height={12} borderRadius={6} style={{ marginTop: 8 }} />
      <SkeletonLoader width="80%" height={12} borderRadius={6} style={{ marginTop: 6 }} />
    </View>
  );
}

export function DashboardSkeleton({ colors }: { colors: any }) {
  return (
    <View style={{ padding: 16 }}>
      <SkeletonLoader width="50%" height={24} borderRadius={8} />
      <SkeletonLoader width="35%" height={14} borderRadius={6} style={{ marginTop: 8 }} />
      <View style={{ marginTop: 20 }}>
        <CardSkeleton colors={colors} />
        <CardSkeleton colors={colors} />
        <CardSkeleton colors={colors} />
      </View>
    </View>
  );
}
