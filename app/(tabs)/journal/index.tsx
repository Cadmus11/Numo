import React, { useMemo, useState } from 'react';
import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { Add, SearchNormal1, Book, Clock } from 'iconsax-react-native';
import { useTheme } from 'src/contexts/ThemeContext';
import type { MaterialColors } from 'src/contexts/ThemeContext';
import { useJournalStore, type Mood } from 'src/stores/journalStore';
import { impactAsync } from 'src/utils/haptics';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const WEEKDAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MOOD_ICONS: Record<Mood, string> = {
  great: '😊',
  good: '🙂',
  neutral: '😐',
  low: '😔',
  bad: '😢',
};
function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

function getMonthStartWeekday(year: number, month: number): number {
  return new Date(year, month - 1, 1).getDay();
}

function formatDate(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

export default function JournalListScreen() {
  const { theme } = useTheme();
  const { colors } = theme;
  const entries = useJournalStore((s) => s.entries);
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [calYear, setCalYear] = useState(new Date().getFullYear());
  const [calMonth, setCalMonth] = useState(new Date().getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState(
    formatDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())
  );

  const filtered = useMemo(() => {
    if (!search.trim()) return entries;
    const lower = search.toLowerCase();
    return entries.filter(
      (e) =>
        e.title.toLowerCase().includes(lower) ||
        e.body.toLowerCase().includes(lower) ||
        e.tags.some((t) => t.toLowerCase().includes(lower))
    );
  }, [entries, search]);

  const monthEntries = useMemo(() => {
    const prefix = `${calYear}-${String(calMonth).padStart(2, '0')}`;
    return entries.filter((e) => e.date.startsWith(prefix));
  }, [entries, calYear, calMonth]);

  const dateEntryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    monthEntries.forEach((e) => {
      counts[e.date] = (counts[e.date] || 0) + 1;
    });
    return counts;
  }, [monthEntries]);

  const selectedDayEntries = useMemo(() => {
    return entries.filter((e) => e.date === selectedDate);
  }, [entries, selectedDate]);

  const daysInMonth = getDaysInMonth(calYear, calMonth);
  const startWeekday = getMonthStartWeekday(calYear, calMonth);
  const todayStr = formatDate(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    new Date().getDate()
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderBottomWidth: 1,
          borderBottomColor: colors.outlineVariant,
        }}>
        <Text style={{ fontSize: 20, fontWeight: '700', color: colors.onSurface }}>Journal</Text>
        <TouchableOpacity
          onPress={() => {
            impactAsync('light');
            router.push('/(tabs)/journal/new');
          }}
          accessibilityRole="button"
          accessibilityLabel="New journal entry">
          <Add size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 16, paddingTop: 10, gap: 8 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.surfaceVariant,
            borderRadius: 10,
            paddingHorizontal: 12,
            height: 40,
          }}>
          <SearchNormal1 size={18} color={colors.onSurfaceVariant} />
          <TextInput
            style={{ flex: 1, fontSize: 15, color: colors.onSurface, marginLeft: 8, padding: 0 }}
            placeholder="Search entries..."
            placeholderTextColor={colors.onSurfaceVariant}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <View style={{ flexDirection: 'row', gap: 8 }}>
          <TouchableOpacity
            onPress={() => setViewMode('list')}
            style={{
              paddingHorizontal: 14,
              paddingVertical: 6,
              borderRadius: 16,
              backgroundColor: viewMode === 'list' ? colors.primary : colors.surfaceVariant,
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '600',
                color: viewMode === 'list' ? colors.onPrimary : colors.onSurfaceVariant,
              }}>
              List
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setViewMode('calendar')}
            style={{
              paddingHorizontal: 14,
              paddingVertical: 6,
              borderRadius: 16,
              backgroundColor: viewMode === 'calendar' ? colors.primary : colors.surfaceVariant,
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '600',
                color: viewMode === 'calendar' ? colors.onPrimary : colors.onSurfaceVariant,
              }}>
              Calendar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {viewMode === 'calendar' ? (
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 12,
            }}>
            <TouchableOpacity
              onPress={() => {
                if (calMonth === 1) {
                  setCalMonth(12);
                  setCalYear(calYear - 1);
                } else setCalMonth(calMonth - 1);
              }}
              style={{ paddingHorizontal: 12, paddingVertical: 6 }}>
              <Text style={{ fontSize: 18, color: colors.primary }}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: '700', color: colors.onSurface }}>
              {MONTH_NAMES[calMonth - 1]} {calYear}
            </Text>
            <TouchableOpacity
              onPress={() => {
                if (calMonth === 12) {
                  setCalMonth(1);
                  setCalYear(calYear + 1);
                } else setCalMonth(calMonth + 1);
              }}
              style={{ paddingHorizontal: 12, paddingVertical: 6 }}>
              <Text style={{ fontSize: 18, color: colors.primary }}>{'>'}</Text>
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: colors.surfaceVariant, borderRadius: 12, padding: 12 }}>
            <View style={{ flexDirection: 'row', marginBottom: 8 }}>
              {WEEKDAY_NAMES.map((w) => (
                <View key={w} style={{ flex: 1, alignItems: 'center' }}>
                  <Text style={{ fontSize: 11, fontWeight: '600', color: colors.onSurfaceVariant }}>
                    {w}
                  </Text>
                </View>
              ))}
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {Array.from({ length: startWeekday }).map((_, i) => (
                <View
                  key={`empty-${i}`}
                  style={{
                    width: '14.28%',
                    aspectRatio: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              ))}
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                const dateStr = formatDate(calYear, calMonth, day);
                const count = dateEntryCounts[dateStr] || 0;
                const isSelected = dateStr === selectedDate;
                const isToday = dateStr === todayStr;
                return (
                  <TouchableOpacity
                    key={day}
                    onPress={() => setSelectedDate(dateStr)}
                    style={{
                      width: '14.28%',
                      aspectRatio: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 8,
                      backgroundColor: isSelected ? colors.primary : 'transparent',
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: isToday ? '800' : '500',
                        color: isSelected
                          ? colors.onPrimary
                          : isToday
                            ? colors.primary
                            : colors.onSurface,
                      }}>
                      {day}
                    </Text>
                    {count > 0 && (
                      <View
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: 2.5,
                          backgroundColor: isSelected ? colors.onPrimary : colors.primary,
                          marginTop: 2,
                        }}
                      />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: colors.onSurface,
              marginTop: 16,
              marginBottom: 8,
            }}>
            {selectedDate === todayStr ? "Today's Entries" : `Entries — ${selectedDate}`}
          </Text>

          {selectedDayEntries.length === 0 ? (
            <View style={{ alignItems: 'center', paddingVertical: 24 }}>
              <Clock size={32} color={colors.onSurfaceVariant} />
              <Text style={{ fontSize: 14, color: colors.onSurfaceVariant, marginTop: 8 }}>
                No entries for this date
              </Text>
              <TouchableOpacity
                onPress={() => router.push(`/(tabs)/journal/new?date=${selectedDate}`)}
                style={{
                  marginTop: 12,
                  backgroundColor: colors.primary,
                  borderRadius: 8,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                }}>
                <Text style={{ fontSize: 13, fontWeight: '600', color: colors.onPrimary }}>
                  Add Entry
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            selectedDayEntries.map((entry) => (
              <JournalCard key={entry.id} entry={entry} colors={colors} />
            ))
          )}
        </ScrollView>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <JournalCard entry={item} colors={colors} />}
          contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={{ alignItems: 'center', paddingVertical: 60 }}>
              <Book size={48} color={colors.onSurfaceVariant} />
              <Text
                style={{
                  fontSize: 16,
                  color: colors.onSurfaceVariant,
                  marginTop: 12,
                  textAlign: 'center',
                }}>
                {search ? 'No entries match your search' : 'No journal entries yet'}
              </Text>
              {!search && (
                <TouchableOpacity
                  onPress={() => router.push('/(tabs)/journal/new')}
                  style={{
                    marginTop: 16,
                    backgroundColor: colors.primary,
                    borderRadius: 10,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                  }}>
                  <Text style={{ fontSize: 14, fontWeight: '600', color: colors.onPrimary }}>
                    Write your first entry
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          }
        />
      )}
    </View>
  );
}

function JournalCard({
  entry,
  colors,
}: {
  entry: {
    id: string;
    date: string;
    title: string;
    mood: Mood;
    tags: string[];
    personalDayNumber: number;
  };
  colors: MaterialColors;
}) {
  const dateObj = new Date(entry.date + 'T00:00:00');
  const monthName = MONTH_NAMES[dateObj.getMonth()];
  const displayDate = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;

  return (
    <TouchableOpacity
      onPress={() => {
        impactAsync('light');
        router.push(`/(tabs)/journal/${entry.id}`);
      }}
      accessibilityRole="button"
      accessibilityLabel={`Journal entry: ${entry.title}`}
      style={{
        backgroundColor: colors.surfaceVariant,
        borderRadius: 12,
        padding: 14,
        marginBottom: 8,
      }}>
      <View
        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{ fontSize: 15, fontWeight: '700', color: colors.onSurface }}
            numberOfLines={1}>
            {entry.title}
          </Text>
          <Text style={{ fontSize: 12, color: colors.onSurfaceVariant, marginTop: 2 }}>
            {displayDate} · Day {entry.personalDayNumber}
          </Text>
        </View>
        <Text style={{ fontSize: 20 }}>{MOOD_ICONS[entry.mood]}</Text>
      </View>
      {entry.tags.length > 0 && (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 4, marginTop: 8 }}>
          {entry.tags.map((tag, i) => (
            <View
              key={i}
              style={{
                backgroundColor: colors.primaryContainer,
                borderRadius: 8,
                paddingHorizontal: 8,
                paddingVertical: 2,
              }}>
              <Text style={{ fontSize: 11, color: colors.onPrimaryContainer }}>{tag}</Text>
            </View>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
}
