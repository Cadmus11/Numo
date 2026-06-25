import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { useTheme } from 'src/contexts/ThemeContext';
import type { MaterialColors } from 'src/contexts/ThemeContext';
import { impactAsync } from 'src/utils/haptics';

interface ToolEntry {
  key: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  route: string;
}

const TOOLS: ToolEntry[] = [
  { key: 'name', title: 'Name Analysis Lab', subtitle: 'Expression, Soul Urge & Personality numbers', icon: 'A', color: '#8B5CF6', route: '/(tabs)/tools/name' },
  { key: 'business', title: 'Business Numerology', subtitle: 'Company & product name analysis', icon: 'B', color: '#3B82F6', route: '/(tabs)/tools/business' },
  { key: 'phone', title: 'Phone Numerology', subtitle: 'Mobile & landline energy analysis', icon: '#', color: '#10B981', route: '/(tabs)/tools/phone' },
  { key: 'house', title: 'House Numerology', subtitle: 'Home & apartment number analysis', icon: 'H', color: '#F59E0B', route: '/(tabs)/tools/house' },
  { key: 'baby', title: 'Baby Name Analyzer', subtitle: 'Find the perfect name for your baby', icon: 'B', color: '#EC4899', route: '/(tabs)/tools/baby' },
  { key: 'knowledge', title: 'Knowledge Library', subtitle: 'Learn numerology, zodiac & interpretation guides', icon: '📚', color: '#8B5CF6', route: '/(tabs)/tools/knowledge' },
];

export default function ToolsMenuScreen() {
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      <Text style={{ fontSize: 22, fontWeight: '700', color: colors.onSurface, marginBottom: 4 }}>Numerology Tools</Text>
      <Text style={{ fontSize: 14, color: colors.onSurfaceVariant, marginBottom: 20 }}>
        Specialized calculators for names, numbers, and more
      </Text>
      {TOOLS.map((tool) => (
        <ToolCard key={tool.key} tool={tool} colors={colors} />
      ))}
    </ScrollView>
  );
}

function ToolCard({ tool, colors }: { tool: ToolEntry; colors: MaterialColors }) {
  return (
    <TouchableOpacity
      onPress={() => { impactAsync('light'); router.push(tool.route as any); }}
      accessibilityRole="button"
      accessibilityLabel={tool.title}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.surfaceVariant,
        borderRadius: 14,
        padding: 16,
        marginBottom: 12,
      }}
    >
      <View
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          backgroundColor: tool.color + '20',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 14,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: '800', color: tool.color }}>{tool.icon}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: colors.onSurface }}>{tool.title}</Text>
        <Text style={{ fontSize: 13, color: colors.onSurfaceVariant, marginTop: 2 }}>{tool.subtitle}</Text>
      </View>
      <Text style={{ fontSize: 18, color: colors.onSurfaceVariant }}>›</Text>
    </TouchableOpacity>
  );
}
