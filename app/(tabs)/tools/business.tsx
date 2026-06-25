import React, { useState, useMemo } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { getExpressionNumber } from 'src/engine';
import { nameNumberMeanings } from 'src/data/nameNumberMeanings';
import { useTheme } from 'src/contexts/ThemeContext';
import type { MaterialColors } from 'src/contexts/ThemeContext';

const SUCCESS_DESCRIPTIONS: Record<number, { potential: string; branding: string; insight: string }> = {
  1: { potential: 'High — pioneering and innovative ventures thrive', branding: 'Strong, independent, original brand identity', insight: 'Best for startups, leadership brands, and first-mover concepts' },
  2: { potential: 'Moderate — partnerships and service-oriented businesses excel', branding: 'Cooperative, harmonious, trustworthy image', insight: 'Best for consulting, counseling, and collaborative platforms' },
  3: { potential: 'High — creative and social enterprises flourish', branding: 'Creative, expressive, engaging brand voice', insight: 'Best for media, arts, entertainment, and social businesses' },
  4: { potential: 'Very High — stable, practical businesses succeed long-term', branding: 'Solid, reliable, trustworthy foundation', insight: 'Best for construction, finance, law, and service industries' },
  5: { potential: 'High — dynamic, change-oriented ventures thrive', branding: 'Adventurous, versatile, progressive image', insight: 'Best for travel, tech, marketing, and media ventures' },
  6: { potential: 'High — community and family-focused businesses flourish', branding: 'Nurturing, responsible, community-driven', insight: 'Best for healthcare, education, hospitality, and family services' },
  7: { potential: 'Moderate — specialized, analytical niches excel', branding: 'Wise, exclusive, premium positioning', insight: 'Best for research, tech, spirituality, and premium services' },
  8: { potential: 'Very High — ambitious, large-scale ventures succeed', branding: 'Powerful, authoritative, prestigious image', insight: 'Best for finance, real estate, law, and executive ventures' },
  9: { potential: 'High — humanitarian and global-minded businesses thrive', branding: 'Compassionate, global, visionary brand', insight: 'Best for non-profits, arts, education, and international ventures' },
};

function InsightCard({ label, value, colors }: { label: string; value: string; colors: MaterialColors }) {
  return (
    <View style={{ backgroundColor: colors.surfaceVariant, borderRadius: 10, padding: 12, marginBottom: 8 }}>
      <Text style={{ fontSize: 11, fontWeight: '600', color: colors.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{label}</Text>
      <Text style={{ fontSize: 14, color: colors.onSurface, lineHeight: 20 }}>{value}</Text>
    </View>
  );
}

export default function BusinessNumerologyScreen() {
  const { theme } = useTheme();
  const { colors } = theme;
  const [businessName, setBusinessName] = useState('');

  const result = useMemo(() => {
    const trimmed = businessName.trim();
    if (!trimmed) return null;
    const expr = getExpressionNumber(trimmed);
    const data = nameNumberMeanings[expr as keyof typeof nameNumberMeanings];
    const success = SUCCESS_DESCRIPTIONS[expr];
    return {
      expression: expr,
      title: data?.expression?.title ?? '',
      talents: data?.expression?.talents ?? [],
      ...success,
    };
  }, [businessName]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      <Text style={{ fontSize: 14, color: colors.onSurfaceVariant, marginBottom: 12 }}>
        Analyze your company, startup, or product name for numerological success potential.
      </Text>

      <View style={{ backgroundColor: colors.surfaceVariant, borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, marginBottom: 20 }}>
        <TextInput
          value={businessName}
          onChangeText={setBusinessName}
          placeholder="Enter business name..."
          placeholderTextColor={colors.onSurfaceVariant + '80'}
          style={{ fontSize: 16, color: colors.onSurface, lineHeight: 22 }}
          autoCapitalize="words"
          autoCorrect={false}
        />
      </View>

      {result && (
        <>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <View style={{ width: 52, height: 52, borderRadius: 26, backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 24, fontWeight: '800', color: colors.onPrimary }}>{result.expression}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 11, fontWeight: '600', color: colors.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: 1 }}>Expression Number</Text>
              <Text style={{ fontSize: 18, fontWeight: '700', color: colors.onSurface }}>{result.title}</Text>
            </View>
          </View>

          <InsightCard label="Success Potential" value={result.potential} colors={colors} />
          <InsightCard label="Branding Style" value={result.branding} colors={colors} />
          <InsightCard label="Best For" value={result.insight} colors={colors} />

          {result.talents.length > 0 && (
            <View style={{ backgroundColor: colors.surfaceVariant, borderRadius: 10, padding: 12 }}>
              <Text style={{ fontSize: 11, fontWeight: '600', color: colors.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Natural Talents</Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
                {result.talents.map((t, i) => (
                  <View key={i} style={{ backgroundColor: colors.primaryContainer, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 4 }}>
                    <Text style={{ fontSize: 12, color: colors.onPrimaryContainer }}>{t}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
}
