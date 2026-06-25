import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Edit2, TickCircle, Trash } from 'iconsax-react-native';
import { useTheme } from 'src/contexts/ThemeContext';
import { useJournalStore, type Mood, type GoalCategory } from 'src/stores/journalStore';

const MOODS: { value: Mood; label: string; icon: string }[] = [
  { value: 'great', label: 'Great', icon: '😊' },
  { value: 'good', label: 'Good', icon: '🙂' },
  { value: 'neutral', label: 'Neutral', icon: '😐' },
  { value: 'low', label: 'Low', icon: '😔' },
  { value: 'bad', label: 'Bad', icon: '😢' },
];

const GOAL_CATEGORIES: { value: GoalCategory; label: string }[] = [
  { value: 'career', label: 'Career' },
  { value: 'finance', label: 'Finance' },
  { value: 'relationships', label: 'Relationships' },
  { value: 'health', label: 'Health' },
  { value: 'spiritual', label: 'Spiritual' },
];

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function JournalEntryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme } = useTheme();
  const { colors } = theme;
  const getEntry = useJournalStore((s) => s.getEntry);
  const updateEntry = useJournalStore((s) => s.updateEntry);
  const deleteEntry = useJournalStore((s) => s.deleteEntry);

  const entry = getEntry(id ?? '');

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(entry?.title ?? '');
  const [body, setBody] = useState(entry?.body ?? '');
  const [mood, setMood] = useState<Mood>(entry?.mood ?? 'neutral');
  const [tagsText, setTagsText] = useState(entry?.tags.join(', ') ?? '');
  const [goalCategory, setGoalCategory] = useState<GoalCategory>(entry?.goalCategory ?? 'career');

  const dateObj = entry ? new Date(entry.date + 'T00:00:00') : null;
  const displayDate = dateObj ? `${MONTH_NAMES[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}` : '';

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Validation', 'Title is required.');
      return;
    }
    const tags = tagsText.split(',').map((t) => t.trim()).filter(Boolean);
    updateEntry(entry!.id, { title: title.trim(), body: body.trim(), mood, tags, goalCategory });
    setEditing(false);
  };

  const handleDelete = () => {
    Alert.alert('Delete Entry', 'Remove this journal entry?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => { deleteEntry(entry!.id); router.back(); } },
    ]);
  };

  if (!entry) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: colors.onSurface }}>Entry not found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: colors.outlineVariant }}>
        <TouchableOpacity onPress={() => router.back()} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          <ArrowLeft size={24} color={colors.onSurface} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: '700', color: colors.onSurface }}>
          {editing ? 'Edit Entry' : 'Entry'}
        </Text>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          {editing ? (
            <TouchableOpacity onPress={handleSave}>
              <TickCircle size={24} color={colors.primary} />
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity onPress={() => setEditing(true)}>
                <Edit2 size={22} color={colors.onSurfaceVariant} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDelete}>
                <Trash size={22} color={colors.error} />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>

      {editing ? (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, paddingBottom: 40 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
            <TextInput
              style={{ backgroundColor: colors.surfaceVariant, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, fontSize: 15, color: colors.onSurface, marginBottom: 10 }}
              placeholder="Title *"
              placeholderTextColor={colors.onSurfaceVariant}
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              style={{ backgroundColor: colors.surfaceVariant, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, fontSize: 15, color: colors.onSurface, minHeight: 120, textAlignVertical: 'top', marginBottom: 10 }}
              placeholder="Write your thoughts..."
              placeholderTextColor={colors.onSurfaceVariant}
              value={body}
              onChangeText={setBody}
              multiline
            />

            <Text style={{ fontSize: 13, fontWeight: '600', color: colors.onSurfaceVariant, marginTop: 8, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Mood</Text>
            <View style={{ flexDirection: 'row', gap: 8, marginBottom: 16 }}>
              {MOODS.map((m) => (
                <TouchableOpacity
                  key={m.value}
                  onPress={() => setMood(m.value)}
                  style={{ flex: 1, alignItems: 'center', paddingVertical: 10, borderRadius: 10, backgroundColor: mood === m.value ? colors.primary : colors.surfaceVariant }}
                >
                  <Text style={{ fontSize: 22 }}>{m.icon}</Text>
                  <Text style={{ fontSize: 11, fontWeight: '600', color: mood === m.value ? colors.onPrimary : colors.onSurfaceVariant, marginTop: 4 }}>{m.label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={{ fontSize: 13, fontWeight: '600', color: colors.onSurfaceVariant, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Goal Category</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
              {GOAL_CATEGORIES.map((c) => (
                <TouchableOpacity
                  key={c.value}
                  onPress={() => setGoalCategory(c.value)}
                  style={{ paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: goalCategory === c.value ? colors.primary : colors.surfaceVariant }}
                >
                  <Text style={{ fontSize: 13, fontWeight: '600', color: goalCategory === c.value ? colors.onPrimary : colors.onSurfaceVariant }}>{c.label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={{ fontSize: 13, fontWeight: '600', color: colors.onSurfaceVariant, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Tags</Text>
            <TextInput
              style={{ backgroundColor: colors.surfaceVariant, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, fontSize: 15, color: colors.onSurface, marginBottom: 10 }}
              placeholder="Comma-separated"
              placeholderTextColor={colors.onSurfaceVariant}
              value={tagsText}
              onChangeText={setTagsText}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      ) : (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: colors.onSurface }}>{entry.title}</Text>
          <Text style={{ fontSize: 13, color: colors.onSurfaceVariant, marginTop: 4 }}>{displayDate}</Text>

          <View style={{ flexDirection: 'row', gap: 8, marginTop: 10 }}>
            <View style={{ backgroundColor: colors.primaryContainer, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 6 }}>
              <Text style={{ fontSize: 13, color: colors.onPrimaryContainer }}>Day {entry.personalDayNumber}</Text>
            </View>
            <View style={{ backgroundColor: colors.primaryContainer, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 6 }}>
              <Text style={{ fontSize: 13, color: colors.onPrimaryContainer }}>Month {entry.personalMonthNumber}</Text>
            </View>
            <View style={{ backgroundColor: colors.primaryContainer, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 6 }}>
              <Text style={{ fontSize: 13, color: colors.onPrimaryContainer }}>Year {entry.personalYearNumber}</Text>
            </View>
          </View>

          {entry.body ? (
            <View style={{ backgroundColor: colors.surfaceVariant, borderRadius: 12, padding: 14, marginTop: 14 }}>
              <Text style={{ fontSize: 15, color: colors.onSurface, lineHeight: 22 }}>{entry.body}</Text>
            </View>
          ) : null}

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 14 }}>
            <Text style={{ fontSize: 22 }}>{MOODS.find((m) => m.value === entry.mood)?.icon}</Text>
            <View style={{ backgroundColor: colors.surfaceVariant, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4 }}>
              <Text style={{ fontSize: 13, color: colors.onSurface }}>{MOODS.find((m) => m.value === entry.mood)?.label}</Text>
            </View>
            <View style={{ backgroundColor: colors.surfaceVariant, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4 }}>
              <Text style={{ fontSize: 13, color: colors.onSurface }}>{entry.goalCategory}</Text>
            </View>
          </View>

          {entry.tags.length > 0 && (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
              {entry.tags.map((tag, i) => (
                <View key={i} style={{ backgroundColor: colors.primaryContainer, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 4 }}>
                  <Text style={{ fontSize: 12, color: colors.onPrimaryContainer }}>#{tag}</Text>
                </View>
              ))}
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
}
