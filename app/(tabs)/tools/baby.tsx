import React, { useState, useMemo } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { getExpressionNumber, getSoulUrgeNumber, getPersonalityNumber } from 'src/engine';
import { nameNumberMeanings } from 'src/data/nameNumberMeanings';
import { useTheme } from 'src/contexts/ThemeContext';
import type { MaterialColors } from 'src/contexts/ThemeContext';

interface NameResult {
  name: string;
  expression: { number: number; title: string };
  soulUrge: { number: number; title: string };
  personality: { number: number; title: string };
  category: 'strong' | 'balanced' | 'creative';
}

function categorize(expr: number, soul: number, pers: number): 'strong' | 'balanced' | 'creative' {
  if ([1, 8, 5].includes(expr) || [1, 8, 5].includes(soul)) return 'strong';
  if ([3, 5, 9].includes(expr) || [3, 5, 9].includes(soul)) return 'creative';
  return 'balanced';
}

function NameResultCard({ result, colors }: { result: NameResult; colors: MaterialColors }) {
  const categoryColors: Record<string, string> = {
    strong: '#8B5CF6',
    balanced: '#10B981',
    creative: '#F59E0B',
  };
  const catColor = categoryColors[result.category];

  return (
    <View
      style={{
        backgroundColor: colors.surfaceVariant,
        borderRadius: 12,
        padding: 14,
        marginBottom: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 8,
        }}>
        <Text style={{ fontSize: 18, fontWeight: '700', color: colors.onSurface }}>
          {result.name}
        </Text>
        <View
          style={{
            backgroundColor: catColor + '20',
            borderRadius: 8,
            paddingHorizontal: 8,
            paddingVertical: 3,
          }}>
          <Text
            style={{
              fontSize: 11,
              fontWeight: '700',
              color: catColor,
              textTransform: 'uppercase',
            }}>
            {result.category}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <NumberLabel num={result.expression.number} label="Expr" colors={colors} />
        <NumberLabel num={result.soulUrge.number} label="Soul" colors={colors} />
        <NumberLabel num={result.personality.number} label="Pers" colors={colors} />
      </View>
      <View style={{ marginTop: 6 }}>
        <Text style={{ fontSize: 12, color: colors.onSurfaceVariant }}>
          {result.expression.title}
        </Text>
      </View>
    </View>
  );
}

function NumberLabel({
  num,
  label,
  colors,
}: {
  num: number;
  label: string;
  colors: MaterialColors;
}) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 12,
          backgroundColor: colors.primaryContainer,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 11, fontWeight: '700', color: colors.onPrimaryContainer }}>
          {num}
        </Text>
      </View>
      <Text style={{ fontSize: 10, fontWeight: '600', color: colors.onSurfaceVariant }}>
        {label}
      </Text>
    </View>
  );
}

const SUGGESTIONS: NameResult[] = [
  {
    name: 'Alexander',
    expression: { number: 9, title: 'The Humanitarian' },
    soulUrge: { number: 7, title: 'The Wisdom Seeker' },
    personality: { number: 11, title: 'The Inspiring Mystic' },
    category: 'creative',
  },
  {
    name: 'Sophia',
    expression: { number: 1, title: 'The Pioneer' },
    soulUrge: { number: 6, title: 'The Caring Heart' },
    personality: { number: 4, title: 'The Reliable Worker' },
    category: 'strong',
  },
  {
    name: 'Benjamin',
    expression: { number: 8, title: 'The Achiever' },
    soulUrge: { number: 2, title: 'The Harmonious Heart' },
    personality: { number: 6, title: 'The Warm Caregiver' },
    category: 'balanced',
  },
  {
    name: 'Olivia',
    expression: { number: 7, title: 'The Seeker of Truth' },
    soulUrge: { number: 11, title: 'The Inspired Soul' },
    personality: { number: 5, title: 'The Magnetic Explorer' },
    category: 'creative',
  },
  {
    name: 'William',
    expression: { number: 5, title: 'The Adventurer' },
    soulUrge: { number: 9, title: 'The Compassionate Soul' },
    personality: { number: 4, title: 'The Reliable Worker' },
    category: 'strong',
  },
  {
    name: 'Amelia',
    expression: { number: 6, title: 'The Nurturer' },
    soulUrge: { number: 3, title: 'The Expressive Soul' },
    personality: { number: 3, title: 'The Charming Optimist' },
    category: 'creative',
  },
  {
    name: 'James',
    expression: { number: 3, title: 'The Creative Communicator' },
    soulUrge: { number: 8, title: 'The Ambitious Spirit' },
    personality: { number: 4, title: 'The Reliable Worker' },
    category: 'balanced',
  },
  {
    name: 'Charlotte',
    expression: { number: 4, title: 'The Builder' },
    soulUrge: { number: 6, title: 'The Caring Heart' },
    personality: { number: 7, title: 'The Wise Observer' },
    category: 'balanced',
  },
];

export default function BabyNameAnalysisScreen() {
  const { theme } = useTheme();
  const { colors } = theme;
  const [name, setName] = useState('');

  const result = useMemo(() => {
    const trimmed = name.trim();
    if (!trimmed) return null;
    const expr = getExpressionNumber(trimmed);
    const soul = getSoulUrgeNumber(trimmed);
    const pers = getPersonalityNumber(trimmed);
    const exprData = nameNumberMeanings[expr as keyof typeof nameNumberMeanings];
    const soulData = nameNumberMeanings[soul as keyof typeof nameNumberMeanings];
    const persData = nameNumberMeanings[pers as keyof typeof nameNumberMeanings];
    return {
      name: trimmed,
      expression: { number: expr, title: exprData?.expression?.title ?? '' },
      soulUrge: { number: soul, title: soulData?.soulUrge?.title ?? '' },
      personality: { number: pers, title: persData?.personality?.title ?? '' },
      category: categorize(expr, soul, pers),
    };
  }, [name]);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      <Text style={{ fontSize: 14, color: colors.onSurfaceVariant, marginBottom: 12 }}>
        Analyze a baby name or browse suggestions to find the perfect numerological match.
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
          placeholder="Enter a name to analyze..."
          placeholderTextColor={colors.onSurfaceVariant + '80'}
          style={{ fontSize: 16, color: colors.onSurface, lineHeight: 22 }}
          autoCapitalize="words"
          autoCorrect={false}
        />
      </View>

      {result && <NameResultCard result={result} colors={colors} />}

      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          color: colors.onSurface,
          marginTop: 8,
          marginBottom: 12,
        }}>
        Suggestions
      </Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primaryContainer,
            borderRadius: 10,
            paddingHorizontal: 12,
            paddingVertical: 6,
          }}
          onPress={() => setName('')}>
          <Text style={{ fontSize: 13, color: colors.onPrimaryContainer, fontWeight: '600' }}>
            Clear
          </Text>
        </TouchableOpacity>
        {['Strong', 'Balanced', 'Creative'].map((cat) => (
          <TouchableOpacity
            key={cat}
            style={{
              backgroundColor: colors.surfaceVariant,
              borderRadius: 10,
              paddingHorizontal: 12,
              paddingVertical: 6,
            }}>
            <Text style={{ fontSize: 13, color: colors.onSurface, fontWeight: '600' }}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {SUGGESTIONS.map((s, i) => (
        <NameResultCard key={i} result={s} colors={colors} />
      ))}
    </ScrollView>
  );
}
