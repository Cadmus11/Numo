import React, { useState, useMemo } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { reduceNumber } from 'src/engine';
import { useTheme } from 'src/contexts/ThemeContext';
import type { MaterialColors } from 'src/contexts/ThemeContext';

const ENERGY_MEANINGS: Record<number, { pattern: string; communication: string; description: string }> = {
  1: { pattern: 'Independent and assertive', communication: 'Direct and commanding', description: 'This number brings leadership energy to calls and communications. It is excellent for sales, negotiations, and taking initiative.' },
  2: { pattern: 'Cooperative and diplomatic', communication: 'Gentle and persuasive', description: 'This number fosters harmony and collaboration. It is ideal for customer service, counseling, and building relationships.' },
  3: { pattern: 'Creative and expressive', communication: 'Charismatic and engaging', description: 'This number enhances creative communication and social connections. Perfect for media, entertainment, and social networking.' },
  4: { pattern: 'Stable and practical', communication: 'Reliable and clear', description: 'This number brings order and reliability to communications. Excellent for business lines, professional offices, and service providers.' },
  5: { pattern: 'Dynamic and adaptable', communication: 'Energetic and versatile', description: 'This number supports change, travel, and diverse communications. Ideal for freelancers, consultants, and global connections.' },
  6: { pattern: 'Nurturing and responsible', communication: 'Warm and caring', description: 'This number radiates warmth and responsibility. Perfect for family lines, healthcare providers, and community services.' },
  7: { pattern: 'Analytical and intuitive', communication: 'Thoughtful and wise', description: 'This number supports deep conversations and intellectual exchange. Excellent for researchers, counselors, and spiritual guidance.' },
  8: { pattern: 'Ambitious and authoritative', communication: 'Powerful and influential', description: 'This number projects authority and success. Ideal for executives, financial services, and high-stakes negotiations.' },
  9: { pattern: 'Compassionate and visionary', communication: 'Inspiring and universal', description: 'This number supports humanitarian and global communications. Perfect for non-profits, international work, and creative arts.' },
};

function AnalysisCard({ label, value, colors }: { label: string; value: string; colors: MaterialColors }) {
  return (
    <View style={{ backgroundColor: colors.surfaceVariant, borderRadius: 10, padding: 12, marginBottom: 8 }}>
      <Text style={{ fontSize: 11, fontWeight: '600', color: colors.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{label}</Text>
      <Text style={{ fontSize: 14, color: colors.onSurface, lineHeight: 20 }}>{value}</Text>
    </View>
  );
}

export default function PhoneNumerologyScreen() {
  const { theme } = useTheme();
  const { colors } = theme;
  const [phone, setPhone] = useState('');

  const result = useMemo(() => {
    const digits = phone.replace(/[^0-9]/g, '');
    if (digits.length < 4) return null;
    const sum = digits.split('').reduce((a, d) => a + parseInt(d, 10), 0);
    const reduced = reduceNumber(sum, false);
    const meaning = ENERGY_MEANINGS[reduced];
    return {
      number: reduced,
      sum,
      digitCount: digits.length,
      ...meaning,
    };
  }, [phone]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      <Text style={{ fontSize: 14, color: colors.onSurfaceVariant, marginBottom: 12 }}>
        Discover the energy pattern and communication style of any phone number.
      </Text>

      <View style={{ backgroundColor: colors.surfaceVariant, borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, marginBottom: 20 }}>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter phone number..."
          placeholderTextColor={colors.onSurfaceVariant + '80'}
          style={{ fontSize: 16, color: colors.onSurface, lineHeight: 22 }}
          keyboardType="phone-pad"
          autoCorrect={false}
        />
      </View>

      {result && (
        <>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <View style={{ width: 52, height: 52, borderRadius: 26, backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 24, fontWeight: '800', color: colors.onPrimary }}>{result.number}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 11, fontWeight: '600', color: colors.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: 1 }}>Phone Energy Number</Text>
              <Text style={{ fontSize: 14, color: colors.onSurface, marginTop: 2 }}>Sum: {result.sum} ({result.digitCount} digits)</Text>
            </View>
          </View>

          <AnalysisCard label="Energy Pattern" value={result.pattern} colors={colors} />
          <AnalysisCard label="Communication Style" value={result.communication} colors={colors} />
          <AnalysisCard label="Full Analysis" value={result.description} colors={colors} />
        </>
      )}
    </ScrollView>
  );
}
