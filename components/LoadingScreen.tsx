import React from 'react';
import { View } from 'react-native';
import { CardSkeleton } from './SkeletonLoader';

interface LoadingScreenProps {
  colors: any;
}

export function LoadingScreen({ colors }: LoadingScreenProps) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 16 }}>
      <CardSkeleton colors={colors} />
      <CardSkeleton colors={colors} />
      <CardSkeleton colors={colors} />
    </View>
  );
}
