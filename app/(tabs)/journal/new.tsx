import React, { useMemo, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, TickCircle } from 'iconsax-react-native';
import { useTheme } from 'src/contexts/ThemeContext';
import { useProfileStore } from 'src/stores/profileStore';
import { useJournalStore, type Mood, type GoalCategory } from 'src/stores/journalStore';
import { calculateFullProfile } from 'src/engine';

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

export default function NewJournalEntryScreen() {
  const { theme } = useTheme();
  const { colors } = theme;
  const { date: queryDate } = useLocalSearchParams<{ date?: string }>();
  const addEntry = useJournalStore((s) => s.addEntry);
  const profiles = useProfileStore((s) => s.profiles);

  const now = useMemo(() => new Date(), []);
  const todayStr = useMemo(() => `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`, [now]);
  const defaultDate = queryDate || todayStr;

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [mood, setMood] = useState<Mood>('neutral');
  const [tagsText, setTagsText] = useState('');
  const [goalCategory, setGoalCategory] = useState<GoalCategory>('career');

  const activeProfile = useMemo(() => {
    const selfProfile = profiles.find((p) => p.type === 'Self');
    return selfProfile || profiles[0] || null;
  }, [profiles]);

  const cycleNumbers = useMemo(() => {
    if (!activeProfile) return { personalDayNumber: 0, personalMonthNumber: 0, personalYearNumber: 0 };
    const birthDate = new Date(activeProfile.dateOfBirth);
    if (isNaN(birthDate.getTime())) return { personalDayNumber: 0, personalMonthNumber: 0, personalYearNumber: 0 };
    const report = calculateFullProfile(
      {
        firstName: activeProfile.firstName,
        middleName: activeProfile.middleName,
        lastName: activeProfile.lastName,
        birthDay: birthDate.getDate(),
        birthMonth: birthDate.getMonth() + 1,
        birthYear: birthDate.getFullYear(),
      },
      { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() },
    );
    return {
      personalDayNumber: report.personalCycles.personalDay,
      personalMonthNumber: report.personalCycles.personalMonth,
      personalYearNumber: report.personalCycles.personalYear,
    };
  }, [activeProfile, now]);

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Validation', 'Title is required.');
      return;
    }

    const tags = tagsText
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    addEntry({
      date: defaultDate,
      title: title.trim(),
      body: body.trim(),
      mood,
      tags,
      goalCategory,
      ...cycleNumbers,
    });

    router.back();
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: colors.outlineVariant }}>
        <TouchableOpacity onPress={() => router.back()} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          <ArrowLeft size={24} color={colors.onSurface} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: '700', color: colors.onSurface }}>New Entry</Text>
        <TouchableOpacity onPress={handleSave}>
          <TickCircle size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, paddingBottom: 40 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <Text style={{ fontSize: 13, fontWeight: '600', color: colors.onSurfaceVariant, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
            Entry
          </Text>
          <TextInput
            style={{ backgroundColor: colors.surfaceVariant, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, fontSize: 15, color: colors.onSurface, marginBottom: 10 }}
            placeholder="Title *"
            placeholderTextColor={colors.onSurfaceVariant}
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={{ backgroundColor: colors.surfaceVariant, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, fontSize: 15, color: colors.onSurface, minHeight: 120, textAlignVertical: 'top', marginBottom: 10 }}
            placeholder={'Write your thoughts...'}
            placeholderTextColor={colors.onSurfaceVariant}
            value={body}
            onChangeText={setBody}
            multiline
          />

          <Text style={{ fontSize: 13, fontWeight: '600', color: colors.onSurfaceVariant, marginTop: 8, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
            Mood
          </Text>
          <View style={{ flexDirection: 'row', gap: 8, marginBottom: 16 }}>
            {MOODS.map((m) => (
              <TouchableOpacity
                key={m.value}
                onPress={() => setMood(m.value)}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  paddingVertical: 10,
                  borderRadius: 10,
                  backgroundColor: mood === m.value ? colors.primary : colors.surfaceVariant,
                }}
              >
                <Text style={{ fontSize: 22 }}>{m.icon}</Text>
                <Text style={{ fontSize: 11, fontWeight: '600', color: mood === m.value ? colors.onPrimary : colors.onSurfaceVariant, marginTop: 4 }}>{m.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={{ fontSize: 13, fontWeight: '600', color: colors.onSurfaceVariant, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
            Goal Category
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
            {GOAL_CATEGORIES.map((c) => (
              <TouchableOpacity
                key={c.value}
                onPress={() => setGoalCategory(c.value)}
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 8,
                  borderRadius: 20,
                  backgroundColor: goalCategory === c.value ? colors.primary : colors.surfaceVariant,
                }}
              >
                <Text style={{ fontSize: 13, fontWeight: '600', color: goalCategory === c.value ? colors.onPrimary : colors.onSurfaceVariant }}>{c.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={{ fontSize: 13, fontWeight: '600', color: colors.onSurfaceVariant, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
            Tags
          </Text>
          <TextInput
            style={{ backgroundColor: colors.surfaceVariant, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, fontSize: 15, color: colors.onSurface, marginBottom: 10 }}
            placeholder="Comma-separated (e.g. reflection, gratitude)"
            placeholderTextColor={colors.onSurfaceVariant}
            value={tagsText}
            onChangeText={setTagsText}
          />

          {cycleNumbers.personalDayNumber > 0 && (
            <View style={{ backgroundColor: colors.primaryContainer, borderRadius: 10, padding: 12, marginTop: 8 }}>
              <Text style={{ fontSize: 12, fontWeight: '600', color: colors.onPrimaryContainer, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {`Today's Energy`}
              </Text>
              <Text style={{ fontSize: 14, color: colors.onPrimaryContainer, marginTop: 2 }}>
                Personal Day {cycleNumbers.personalDayNumber} · Month {cycleNumbers.personalMonthNumber} · Year {cycleNumbers.personalYearNumber}
              </Text>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
