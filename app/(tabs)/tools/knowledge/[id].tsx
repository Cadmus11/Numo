import { useMemo } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useTheme } from 'src/contexts/ThemeContext';
import { getArticleById } from 'src/data/knowledgeLibrary';

export default function ArticleDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme } = useTheme();
  const { colors } = theme;

  const article = useMemo(() => getArticleById(id ?? ''), [id]);

  const related = useMemo(() => {
    if (!article?.relatedArticles) return [];
    return article.relatedArticles.map((rid) => getArticleById(rid)).filter(Boolean);
  }, [article]);

  if (!article) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 16, color: colors.onSurfaceVariant }}>Article not found</Text>
      </View>
    );
  }

  const paragraphs = article.content.split('\n').filter(Boolean);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      <Text style={{ fontSize: 22, fontWeight: '700', color: colors.onSurface, marginBottom: 4 }}>
        {article.title}
      </Text>
      <Text style={{ fontSize: 14, color: colors.onSurfaceVariant, marginBottom: 16 }}>
        {article.subtitle}
      </Text>

      {paragraphs.map((p, i) => {
        const isHeading = p.startsWith('  ') || (p === p.toUpperCase() && p.length > 4);
        return (
          <Text
            key={i}
            style={{
              fontSize: isHeading ? 15 : 14,
              fontWeight: isHeading ? '700' : '400',
              color: isHeading ? colors.primary : colors.onSurface,
              lineHeight: 22,
              marginBottom: 10,
              textTransform: isHeading ? 'uppercase' : 'none',
              letterSpacing: isHeading ? 0.5 : 0,
            }}>
            {p.trim()}
          </Text>
        );
      })}

      {related.length > 0 && (
        <View style={{ marginTop: 20 }}>
          <Text
            style={{ fontSize: 16, fontWeight: '700', color: colors.onSurface, marginBottom: 10 }}>
            Related Articles
          </Text>
          {related.map((r) => (
            <TouchableOpacity
              key={r!.id}
              onPress={() => router.replace(`/(tabs)/tools/knowledge/${r!.id}`)}
              style={{
                backgroundColor: colors.surfaceVariant,
                borderRadius: 10,
                padding: 12,
                marginBottom: 8,
              }}>
              <Text style={{ fontSize: 14, fontWeight: '600', color: colors.onSurface }}>
                {r!.title}
              </Text>
              <Text style={{ fontSize: 12, color: colors.onSurfaceVariant, marginTop: 2 }}>
                {r!.subtitle}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
}
