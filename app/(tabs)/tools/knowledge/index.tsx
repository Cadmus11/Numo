import React, { useMemo, useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { useTheme } from 'src/contexts/ThemeContext';
import type { MaterialColors } from 'src/contexts/ThemeContext';
import { articles, searchArticles } from 'src/data/knowledgeLibrary';
import type { Article } from 'src/data/knowledgeLibrary';

const CATEGORIES = [
  { key: '', label: 'All' },
  { key: 'numerology', label: 'Numerology' },
  { key: 'chinese-zodiac', label: 'Zodiac' },
  { key: 'guide', label: 'Guides' },
] as const;

const CATEGORY_COLORS: Record<string, string> = {
  numerology: '#8B5CF6',
  'chinese-zodiac': '#EF4444',
  guide: '#3B82F6',
};

export default function KnowledgeListScreen() {
  const { theme } = useTheme();
  const { colors } = theme;
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  const filtered = useMemo(() => {
    if (query.trim()) {
      return searchArticles(query);
    }
    if (category) {
      return articles.filter((a) => a.category === category);
    }
    return articles;
  }, [query, category]);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      <View
        style={{
          backgroundColor: colors.surfaceVariant,
          borderRadius: 12,
          paddingHorizontal: 14,
          paddingVertical: 12,
          marginBottom: 14,
        }}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search articles..."
          placeholderTextColor={colors.onSurfaceVariant + '80'}
          style={{ fontSize: 15, color: colors.onSurface, lineHeight: 20 }}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat.key}
            onPress={() => {
              setCategory(cat.key);
              setQuery('');
            }}
            style={{
              backgroundColor: category === cat.key ? colors.primary : colors.surfaceVariant,
              borderRadius: 10,
              paddingHorizontal: 12,
              paddingVertical: 6,
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                color: category === cat.key ? colors.onPrimary : colors.onSurface,
              }}>
              {cat.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {filtered.map((article) => (
        <ArticleCard key={article.id} article={article} colors={colors} />
      ))}
    </ScrollView>
  );
}

function ArticleCard({ article, colors }: { article: Article; colors: MaterialColors }) {
  const catColor = CATEGORY_COLORS[article.category] ?? colors.primary;
  return (
    <TouchableOpacity
      onPress={() => router.push(`/(tabs)/tools/knowledge/${article.id}`)}
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
          alignItems: 'flex-start',
          marginBottom: 6,
        }}>
        <Text style={{ fontSize: 15, fontWeight: '700', color: colors.onSurface, flex: 1 }}>
          {article.title}
        </Text>
        <View
          style={{
            backgroundColor: catColor + '20',
            borderRadius: 6,
            paddingHorizontal: 8,
            paddingVertical: 2,
            marginLeft: 8,
          }}>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '700',
              color: catColor,
              textTransform: 'uppercase',
            }}>
            {article.category}
          </Text>
        </View>
      </View>
      <Text
        style={{ fontSize: 13, color: colors.onSurfaceVariant, lineHeight: 18 }}
        numberOfLines={2}>
        {article.subtitle}
      </Text>
    </TouchableOpacity>
  );
}
