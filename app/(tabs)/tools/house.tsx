import React, { useState, useMemo } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { reduceNumber } from 'src/engine';
import { useTheme } from 'src/contexts/ThemeContext';
import type { MaterialColors } from 'src/contexts/ThemeContext';

const HOME_ENERGIES: Record<
  number,
  { energy: string; prosperity: string; description: string; ideal: string }
> = {
  1: {
    energy: 'Independent and pioneering',
    prosperity: 'Self-made prosperity through initiative',
    description:
      'A home of leaders and innovators. This space supports independence, ambition, and new beginnings.',
    ideal: 'Entrepreneurs, single professionals, and anyone starting a new chapter',
  },
  2: {
    energy: 'Harmonious and cooperative',
    prosperity: 'Prosperity through partnership and diplomacy',
    description:
      'A peaceful, nurturing space that fosters cooperation and emotional connection. Perfect for building relationships.',
    ideal: 'Couples, families, therapists, and those seeking harmony',
  },
  3: {
    energy: 'Creative and social',
    prosperity: 'Prosperity through creative expression',
    description:
      'A vibrant, expressive home full of joy and social energy. This space supports creativity and self-expression.',
    ideal: 'Artists, writers, entertainers, and social families',
  },
  4: {
    energy: 'Stable and grounded',
    prosperity: 'Steady, reliable prosperity through hard work',
    description:
      'A solid, secure home that provides stability and structure. Supports discipline, organization, and long-term planning.',
    ideal: 'Builders, managers, and those who value stability and routine',
  },
  5: {
    energy: 'Dynamic and adventurous',
    prosperity: 'Prosperity through change and adaptability',
    description:
      'An energetic, change-friendly space that supports freedom and variety. Expect frequent visitors and exciting changes.',
    ideal: 'Travelers, freelancers, and freedom-loving individuals',
  },
  6: {
    energy: 'Nurturing and loving',
    prosperity: 'Prosperity through service and community',
    description:
      'A warm, caring home that radiates love. The heart of family and community life. Supports service and responsibility.',
    ideal: 'Families, caregivers, and community-oriented people',
  },
  7: {
    energy: 'Quiet and contemplative',
    prosperity: 'Prosperity through wisdom and analysis',
    description:
      'A peaceful sanctuary for reflection, study, and spiritual growth. Supports introspection and intellectual pursuits.',
    ideal: 'Thinkers, researchers, writers, and spiritual seekers',
  },
  8: {
    energy: 'Powerful and abundant',
    prosperity: 'Material prosperity and executive success',
    description:
      'An ambitious space that supports financial success and material abundance. Projects authority and achievement.',
    ideal: 'Executives, entrepreneurs, and ambitious professionals',
  },
  9: {
    energy: 'Compassionate and global',
    prosperity: 'Prosperity through service and universal connection',
    description:
      'A generous, open home that welcomes diverse people and ideas. Supports humanitarian work and broad perspectives.',
    ideal: 'Humanitarians, artists, teachers, and global citizens',
  },
};

function DetailCard({
  label,
  value,
  colors,
}: {
  label: string;
  value: string;
  colors: MaterialColors;
}) {
  return (
    <View
      style={{
        backgroundColor: colors.surfaceVariant,
        borderRadius: 10,
        padding: 12,
        marginBottom: 8,
      }}>
      <Text
        style={{
          fontSize: 11,
          fontWeight: '600',
          color: colors.onSurfaceVariant,
          textTransform: 'uppercase',
          letterSpacing: 1,
          marginBottom: 4,
        }}>
        {label}
      </Text>
      <Text style={{ fontSize: 14, color: colors.onSurface, lineHeight: 20 }}>{value}</Text>
    </View>
  );
}

export default function HouseNumerologyScreen() {
  const { theme } = useTheme();
  const { colors } = theme;
  const [house, setHouse] = useState('');

  const result = useMemo(() => {
    const digits = house.replace(/[^0-9]/g, '');
    if (digits.length === 0) return null;
    const num = parseInt(digits, 10);
    const reduced = reduceNumber(num, false);
    const meaning = HOME_ENERGIES[reduced];
    return { number: num, reduced, ...meaning };
  }, [house]);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      <Text style={{ fontSize: 14, color: colors.onSurfaceVariant, marginBottom: 12 }}>
        Discover the energy and prosperity potential of any house, apartment, or building number.
      </Text>

      <View
        style={{
          backgroundColor: colors.surfaceVariant,
          borderRadius: 12,
          paddingHorizontal: 14,
          paddingVertical: 12,
          marginBottom: 20,
        }}>
        <TextInput
          value={house}
          onChangeText={setHouse}
          placeholder="Enter house/apartment number..."
          placeholderTextColor={colors.onSurfaceVariant + '80'}
          style={{ fontSize: 16, color: colors.onSurface, lineHeight: 22 }}
          keyboardType="number-pad"
          autoCorrect={false}
        />
      </View>

      {result && (
        <>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <View
              style={{
                width: 52,
                height: 52,
                borderRadius: 26,
                backgroundColor: colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 24, fontWeight: '800', color: colors.onPrimary }}>
                {result.reduced}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '600',
                  color: colors.onSurfaceVariant,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}>
                Home Energy Number
              </Text>
              <Text style={{ fontSize: 14, color: colors.onSurface, marginTop: 2 }}>
                Reduced from {result.number}
              </Text>
            </View>
          </View>

          <DetailCard label="Home Energy" value={result.energy} colors={colors} />
          <DetailCard label="Prosperity Indicator" value={result.prosperity} colors={colors} />
          <DetailCard label="Full Description" value={result.description} colors={colors} />
          <DetailCard label="Ideal For" value={result.ideal} colors={colors} />
        </>
      )}
    </ScrollView>
  );
}
