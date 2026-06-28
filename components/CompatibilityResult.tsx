import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useTheme } from 'src/contexts/ThemeContext';
import { GaugeScore } from './GaugeScore';
import type { CombinedCompatibility } from 'src/engine/combined';

interface CompatibilityResultProps {
  result: CombinedCompatibility;
  nameA: string;
  nameB: string;
}

export const CompatibilityResult: React.FC<CompatibilityResultProps> = ({
  result,
  nameA,
  nameB,
}) => {
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: '700',
          color: colors.onSurface,
          textAlign: 'center',
          marginBottom: 4,
        }}>
        {nameA} & {nameB}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: colors.primary,
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: 20,
        }}>
        {result.overall.rating}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: colors.onSurfaceVariant,
          textAlign: 'center',
          lineHeight: 20,
          marginBottom: 24,
        }}>
        {result.overall.description}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: colors.surfaceVariant,
          borderRadius: 16,
          padding: 16,
          marginBottom: 20,
        }}>
        <GaugeScore score={result.love} label="Love" />
        <GaugeScore score={result.friendship} label="Friendship" />
        <GaugeScore score={result.business} label="Business" />
      </View>

      <Section title="Numerology Match" colors={colors}>
        <Row label="Life Path" a={`${result.numerology.love}`} b="" colors={colors} />
        <Row label="Soul Urge" a={`${result.numerology.love}`} b="" colors={colors} />
        <Row label="Expression" a={`${result.numerology.love}`} b="" colors={colors} />
        <Row label="Personality" a={`${result.numerology.love}`} b="" colors={colors} />
      </Section>

      <Section title="Chinese Zodiac" colors={colors}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <Text style={{ fontSize: 24, marginBottom: 4 }}>
              {getAnimalEmoji(result.zodiac.animalA)}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: '600', color: colors.onSurface }}>
              {result.zodiac.animalA}
            </Text>
          </View>
          <View style={{ justifyContent: 'center', paddingHorizontal: 16 }}>
            <Text style={{ fontSize: 18, color: colors.primary }}>&</Text>
          </View>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <Text style={{ fontSize: 24, marginBottom: 4 }}>
              {getAnimalEmoji(result.zodiac.animalB)}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: '600', color: colors.onSurface }}>
              {result.zodiac.animalB}
            </Text>
          </View>
        </View>
        {result.zodiac.isEnemy && (
          <View
            style={{ backgroundColor: '#EF444420', borderRadius: 8, padding: 10, marginBottom: 8 }}>
            <Text style={{ fontSize: 12, color: '#EF4444', fontWeight: '600', marginBottom: 2 }}>
              Direct Enemy Signs
            </Text>
            <Text style={{ fontSize: 11, color: '#EF4444', opacity: 0.8 }}>
              {result.zodiac.animalA} and {result.zodiac.animalB} are opposing signs. This
              relationship requires extra understanding.
            </Text>
          </View>
        )}
        {result.zodiac.isTriangle && (
          <View
            style={{ backgroundColor: '#22C55E20', borderRadius: 8, padding: 10, marginBottom: 8 }}>
            <Text style={{ fontSize: 12, color: '#22C55E', fontWeight: '600', marginBottom: 2 }}>
              Same Alliance Triangle
            </Text>
            <Text style={{ fontSize: 11, color: '#22C55E', opacity: 0.8 }}>
              Both belong to the same zodiac alliance group, sharing core values and compatibility.
            </Text>
          </View>
        )}
        {result.zodiac.isSecretFriends && (
          <View
            style={{ backgroundColor: '#8B5CF620', borderRadius: 8, padding: 10, marginBottom: 8 }}>
            <Text style={{ fontSize: 12, color: '#8B5CF6', fontWeight: '600', marginBottom: 2 }}>
              Secret Friends
            </Text>
            <Text style={{ fontSize: 11, color: '#8B5CF6', opacity: 0.8 }}>
              A hidden bond in the zodiac — you share an unexpected harmony and deep support.
            </Text>
          </View>
        )}
        <View style={{ backgroundColor: colors.surface, borderRadius: 8, padding: 10 }}>
          <Text
            style={{
              fontSize: 12,
              color: colors.onSurfaceVariant,
              fontWeight: '600',
              marginBottom: 2,
            }}>
            Compatibility Rating
          </Text>
          <Text style={{ fontSize: 13, color: colors.onSurface }}>{result.zodiac.rating}</Text>
        </View>
      </Section>

      {result.strengths.length > 0 && (
        <Section title="Strengths" colors={colors}>
          {result.strengths.map((s, i) => (
            <Text
              key={i}
              style={{
                fontSize: 13,
                color: colors.onSurface,
                lineHeight: 19,
                marginBottom: 6,
                paddingLeft: 8,
              }}>
              {'\u2022'} {s}
            </Text>
          ))}
        </Section>
      )}

      {result.conflicts.length > 0 && (
        <Section title="Growth Areas" colors={colors}>
          {result.conflicts.map((c, i) => (
            <Text
              key={i}
              style={{
                fontSize: 13,
                color: '#F97316',
                lineHeight: 19,
                marginBottom: 6,
                paddingLeft: 8,
              }}>
              {'\u2022'} {c}
            </Text>
          ))}
        </Section>
      )}

      {result.recommendations.length > 0 && (
        <Section title="Recommendations" colors={colors}>
          {result.recommendations.map((r, i) => (
            <Text
              key={i}
              style={{
                fontSize: 13,
                color: colors.onSurface,
                lineHeight: 19,
                marginBottom: 6,
                paddingLeft: 8,
              }}>
              {'\u2022'} {r}
            </Text>
          ))}
        </Section>
      )}
    </ScrollView>
  );
};

function getAnimalEmoji(animal: string): string {
  const emojis: Record<string, string> = {
    Rat: '\ud83d\udc00',
    Ox: '\ud83d\udc02',
    Tiger: '\ud83d\udc05',
    Rabbit: '\ud83d\udc07',
    Dragon: '\ud83d\udc09',
    Snake: '\ud83d\udc0d',
    Horse: '\ud83d\udc0e',
    Goat: '\ud83d\udc10',
    Monkey: '\ud83d\udc12',
    Rooster: '\ud83d\udc13',
    Dog: '\ud83d\udc15',
    Pig: '\ud83d\udc16',
  };
  return emojis[animal] ?? '';
}

function Section({
  title,
  children,
  colors,
}: {
  title: string;
  children: React.ReactNode;
  colors: any;
}) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '600',
          color: colors.onSurfaceVariant,
          marginBottom: 10,
          textTransform: 'uppercase',
          letterSpacing: 1,
        }}>
        {title}
      </Text>
      <View
        style={{
          backgroundColor: colors.surfaceVariant,
          borderRadius: 12,
          padding: 14,
        }}>
        {children}
      </View>
    </View>
  );
}

function Row({ label, a, b, colors }: { label: string; a: string; b: string; colors: any }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 }}>
      <Text style={{ fontSize: 13, color: colors.onSurfaceVariant }}>{label}</Text>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <Text style={{ fontSize: 13, color: colors.onSurface, fontWeight: '500' }}>{a}</Text>
        <Text style={{ fontSize: 13, color: colors.onSurfaceVariant }}>/</Text>
        <Text style={{ fontSize: 13, color: colors.onSurface, fontWeight: '500' }}>{b}</Text>
      </View>
    </View>
  );
}
