import React, { useState, useMemo } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { getExpressionNumber, getSoulUrgeNumber, getPersonalityNumber } from 'src/engine';
import { nameNumberMeanings } from 'src/data/nameNumberMeanings';
import { useTheme } from 'src/contexts/ThemeContext';
import type { MaterialColors } from 'src/contexts/ThemeContext';

function ResultCard({
  number,
  label,
  meaning,
  colors,
}: {
  number: number;
  label: string;
  meaning: { title: string; description: string };
  colors: MaterialColors;
}) {
  return (
    <View
      style={{
        backgroundColor: colors.surfaceVariant,
        borderRadius: 12,
        padding: 14,
        marginBottom: 10,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 20, fontWeight: '800', color: colors.onPrimary }}>{number}</Text>
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
            {label}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: '700', color: colors.onSurface }}>
            {meaning.title}
          </Text>
        </View>
      </View>
      <Text style={{ fontSize: 14, color: colors.onSurface, marginTop: 10, lineHeight: 20 }}>
        {meaning.description}
      </Text>
    </View>
  );
}

export default function NameAnalysisScreen() {
  const { theme } = useTheme();
  const { colors } = theme;
  const [name, setName] = useState('');

  const results = useMemo(() => {
    const trimmed = name.trim();
    if (!trimmed) return null;
    const expr = getExpressionNumber(trimmed);
    const soul = getSoulUrgeNumber(trimmed);
    const pers = getPersonalityNumber(trimmed);
    const exprData = nameNumberMeanings[expr as keyof typeof nameNumberMeanings];
    const soulData = nameNumberMeanings[soul as keyof typeof nameNumberMeanings];
    const persData = nameNumberMeanings[pers as keyof typeof nameNumberMeanings];
    return {
      expression: {
        number: expr,
        title: exprData?.expression?.title ?? '',
        description: exprData?.expression?.lifePurpose ?? '',
      },
      soulUrge: {
        number: soul,
        title: soulData?.soulUrge?.title ?? '',
        description: soulData?.soulUrge?.innerDesires ?? '',
      },
      personality: {
        number: pers,
        title: persData?.personality?.title ?? '',
        description: persData?.personality?.externalImage ?? '',
      },
    };
  }, [name]);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      <Text style={{ fontSize: 14, color: colors.onSurfaceVariant, marginBottom: 12 }}>
        Enter a full name to reveal its Expression, Soul Urge, and Personality numbers.
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
          value={name}
          onChangeText={setName}
          placeholder="Enter full name..."
          placeholderTextColor={colors.onSurfaceVariant + '80'}
          style={{ fontSize: 16, color: colors.onSurface, lineHeight: 22 }}
          autoCapitalize="words"
          autoCorrect={false}
        />
      </View>

      {results && (
        <>
          <ResultCard
            number={results.expression.number}
            label="Expression Number"
            meaning={{
              title: results.expression.title,
              description: results.expression.description,
            }}
            colors={colors}
          />
          <ResultCard
            number={results.soulUrge.number}
            label="Soul Urge Number"
            meaning={{ title: results.soulUrge.title, description: results.soulUrge.description }}
            colors={colors}
          />
          <ResultCard
            number={results.personality.number}
            label="Personality Number"
            meaning={{
              title: results.personality.title,
              description: results.personality.description,
            }}
            colors={colors}
          />
        </>
      )}
    </ScrollView>
  );
}
