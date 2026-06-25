import React, { useMemo } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { Add, HeartSearch, DocumentText } from 'iconsax-react-native';
import { useTheme } from 'src/contexts/ThemeContext';
import type { MaterialColors } from 'src/contexts/ThemeContext';
import { useProfileStore } from 'src/stores/profileStore';
import { calculateFullProfile, reduceNumber } from 'src/engine';
import { personalDayMeanings, personalMonthMeanings, personalYearMeanings } from 'src/data/cycleMeanings';
import { luckyElements } from 'src/data/luckyElements';
import { getDailyAffirmation } from 'src/data/affirmations';
import { impactAsync } from 'src/utils/haptics';

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const WEEKDAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getEnergyLevel(n: number): 'high' | 'moderate' | 'low' {
  if ([1, 3, 5, 8].includes(n)) return 'high';
  if ([2, 4, 6].includes(n)) return 'moderate';
  return 'low';
}

function energyColor(level: 'high' | 'moderate' | 'low', colors: MaterialColors): string {
  switch (level) {
    case 'high': return '#22C55E';
    case 'moderate': return '#EAB308';
    case 'low': return '#EF4444';
  }
}

function InfoCard({ title, children, colors }: { title: string; children: React.ReactNode; colors: MaterialColors }) {
  return (
    <View style={{ backgroundColor: colors.surfaceVariant, borderRadius: 12, padding: 14, marginBottom: 10 }}>
      <Text style={{ fontSize: 13, fontWeight: '600', color: colors.onSurfaceVariant, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>
        {title}
      </Text>
      {children}
    </View>
  );
}

function NumberBadge({ number, colors }: { number: number; colors: MaterialColors }) {
  return (
    <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: '800', color: colors.onPrimary }}>{number}</Text>
    </View>
  );
}

export default function HomeScreen() {
  const { theme } = useTheme();
  const { colors } = theme;
  const profiles = useProfileStore((s) => s.profiles);
  const activeProfile = useMemo(() => {
    const selfProfile = profiles.find((p) => p.type === 'Self');
    return selfProfile || profiles[0] || null;
  }, [profiles]);

  const now = useMemo(() => {
    const d = new Date();
    return { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate(), weekday: d.getDay() };
  }, []);

  const report = useMemo(() => {
    if (!activeProfile) return null;
    const birthDate = new Date(activeProfile.dateOfBirth);
    if (isNaN(birthDate.getTime())) return null;
    return calculateFullProfile(
      {
        firstName: activeProfile.firstName,
        middleName: activeProfile.middleName,
        lastName: activeProfile.lastName,
        birthDay: birthDate.getDate(),
        birthMonth: birthDate.getMonth() + 1,
        birthYear: birthDate.getFullYear(),
      },
      { year: now.year, month: now.month, day: now.day },
    );
  }, [activeProfile, now]);

  const dayMeaning = report ? personalDayMeanings[report.personalCycles.personalDay] : null;
  const monthMeaning = report ? personalMonthMeanings[report.personalCycles.personalMonth] : null;
  const yearMeaning = report ? personalYearMeanings[report.personalCycles.personalYear] : null;
  const luckyData = report ? (luckyElements[report.lifePath] ?? luckyElements[1]) : null;
  const affirmation = report ? getDailyAffirmation(report.lifePath) : null;

  const forecast = useMemo(() => {
    if (!report) return null;
    const days: { label: string; number: number; level: 'high' | 'moderate' | 'low' }[] = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(now.year, now.month - 1, now.day + i);
      const num = reduceNumber(report.personalCycles.personalMonth + d.getDate());
      days.push({
        label: i === 0 ? 'Today' : WEEKDAY_NAMES[d.getDay()].slice(0, 3),
        number: num,
        level: getEnergyLevel(num),
      });
    }
    return days;
  }, [report, now]);

  if (profiles.length === 0) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <View style={{ paddingHorizontal: 20, paddingTop: 60, paddingBottom: 16 }}>
          <Text style={{ fontSize: 28, fontWeight: '700', color: colors.onSurface }}>Welcome to NUMO</Text>
          <Text style={{ fontSize: 15, color: colors.onSurfaceVariant, marginTop: 4 }}>Create your first profile to see your daily numerology.</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <TouchableOpacity
            onPress={() => router.push('/(tabs)/profiles/new')}
            style={{ backgroundColor: colors.primary, borderRadius: 12, paddingVertical: 14, paddingHorizontal: 28 }}
          >
            <Text style={{ fontSize: 16, fontWeight: '700', color: colors.onPrimary }}>Create Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    return 'Good evening';
  })();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ paddingHorizontal: 20, paddingTop: 12, paddingBottom: 8 }}>
        <Text style={{ fontSize: 24, fontWeight: '700', color: colors.onSurface }}>
          {greeting}{activeProfile ? `, ${activeProfile.firstName}` : ''}
        </Text>
        <Text style={{ fontSize: 14, color: colors.onSurfaceVariant, marginTop: 2 }}>
          {WEEKDAY_NAMES[now.weekday]}, {MONTH_NAMES[now.month - 1]} {now.day}, {now.year}
        </Text>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        {report && (
          <>
            <InfoCard title="Today's Energy" colors={colors}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                <NumberBadge number={report.personalCycles.personalDay} colors={colors} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 16, fontWeight: '700', color: colors.onSurface }}>
                    Personal Day {report.personalCycles.personalDay} — {dayMeaning?.title ?? ''}
                  </Text>
                  <Text style={{ fontSize: 13, color: colors.onSurfaceVariant, marginTop: 2 }}>
                    {dayMeaning?.energy ?? ''}
                  </Text>
                </View>
              </View>
              {dayMeaning?.bestActivities && (
                <View style={{ marginTop: 8, flexDirection: 'row', flexWrap: 'wrap', gap: 4 }}>
                  {dayMeaning.bestActivities.slice(0, 3).map((act, i) => (
                    <View key={i} style={{ backgroundColor: colors.primaryContainer, borderRadius: 12, paddingHorizontal: 10, paddingVertical: 4 }}>
                      <Text style={{ fontSize: 12, color: colors.onPrimaryContainer }}>{act}</Text>
                    </View>
                  ))}
                </View>
              )}
              <Text style={{ fontSize: 13, color: colors.onSurfaceVariant, marginTop: 8 }}>{dayMeaning?.forecast ?? ''}</Text>
            </InfoCard>

            <InfoCard title="This Month" colors={colors}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                <NumberBadge number={report.personalCycles.personalMonth} colors={colors} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 16, fontWeight: '700', color: colors.onSurface }}>
                    Personal Month {report.personalCycles.personalMonth} — {monthMeaning?.title ?? ''}
                  </Text>
                  <Text style={{ fontSize: 13, color: colors.onSurfaceVariant, marginTop: 2 }}>
                    {monthMeaning?.energy ?? ''}
                  </Text>
                </View>
              </View>
            </InfoCard>

            <InfoCard title="This Year" colors={colors}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 14 }}>
                <NumberBadge number={report.personalCycles.personalYear} colors={colors} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 16, fontWeight: '700', color: colors.onSurface }}>
                    Personal Year {report.personalCycles.personalYear} — {yearMeaning?.title ?? ''}
                  </Text>
                  <Text style={{ fontSize: 13, color: colors.onSurfaceVariant, marginTop: 2 }}>
                    {yearMeaning?.theme ?? ''}
                  </Text>
                  <Text style={{ fontSize: 12, color: colors.onSurfaceVariant, marginTop: 4 }}>
                    {yearMeaning?.recommendedFocus ?? ''}
                  </Text>
                </View>
              </View>
            </InfoCard>

            <InfoCard title="Global Energy" colors={colors}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                <NumberBadge number={report.universalCycles.universalYear} colors={colors} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 16, fontWeight: '700', color: colors.onSurface }}>
                    Universal Year {report.universalCycles.universalYear}
                  </Text>
                  <Text style={{ fontSize: 13, color: colors.onSurfaceVariant, marginTop: 2 }}>
                    The collective energy of {now.year}
                  </Text>
                </View>
              </View>
            </InfoCard>

            <InfoCard title="Lucky Elements" colors={colors}>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
                {luckyData?.luckyNumbers && (
                  <LuckyPill label="Numbers" value={luckyData.luckyNumbers.slice(0, 3).join(', ')} colors={colors} />
                )}
                {luckyData?.luckyColors && (
                  <LuckyPill label="Colors" value={luckyData.luckyColors.slice(0, 3).join(', ')} colors={colors} />
                )}
                {luckyData?.luckyDays && (
                  <LuckyPill label="Days" value={luckyData.luckyDays.slice(0, 3).join(', ')} colors={colors} />
                )}
                {luckyData?.luckyActivities && (
                  <LuckyPill label="Activity" value={luckyData.luckyActivities[0]} colors={colors} />
                )}
              </View>
            </InfoCard>

            {affirmation && (
              <InfoCard title="Daily Affirmation" colors={colors}>
                <View style={{ backgroundColor: colors.primaryContainer, borderRadius: 12, padding: 14 }}>
                  <Text style={{ fontSize: 15, color: colors.onPrimaryContainer, lineHeight: 22, fontStyle: 'italic' }}>
                    {'"'}{affirmation}{'"'}
                  </Text>
                </View>
              </InfoCard>
            )}

            {forecast && (
              <InfoCard title="7-Day Energy Forecast" colors={colors}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  {forecast.map((day, i) => (
                    <View key={i} style={{ alignItems: 'center', gap: 6 }}>
                      <Text style={{ fontSize: 11, fontWeight: '600', color: colors.onSurfaceVariant }}>{day.label}</Text>
                      <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: energyColor(day.level, colors), justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, fontWeight: '700', color: '#FFFFFF' }}>{day.number}</Text>
                      </View>
                      <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: energyColor(day.level, colors) }} />
                    </View>
                  ))}
                </View>
              </InfoCard>
            )}
          </>
        )}

        <InfoCard title="Quick Actions" colors={colors}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <ActionButton
              icon={<Add size={20} color={colors.onPrimary} />}
              label="Reflection"
              onPress={() => router.push('/(tabs)/journal')}
              colors={colors}
            />
            <ActionButton
              icon={<HeartSearch size={20} color={colors.onPrimary} />}
              label="Compare"
              onPress={() => router.push('/(tabs)/compare')}
              colors={colors}
            />
            {activeProfile && (
              <ActionButton
                icon={<DocumentText size={20} color={colors.onPrimary} />}
                label="Report"
                onPress={() => router.push(`/(tabs)/profiles/${activeProfile.id}`)}
                colors={colors}
              />
            )}
          </View>
        </InfoCard>
      </ScrollView>
    </View>
  );
}

function LuckyPill({ label, value, colors }: { label: string; value: string; colors: MaterialColors }) {
  return (
    <View style={{ backgroundColor: colors.primaryContainer, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 6 }}>
      <Text style={{ fontSize: 10, fontWeight: '600', color: colors.onPrimaryContainer, textTransform: 'uppercase', letterSpacing: 0.5 }}>{label}</Text>
      <Text style={{ fontSize: 13, fontWeight: '600', color: colors.onSurface, marginTop: 1 }}>{value}</Text>
    </View>
  );
}

function ActionButton({ icon, label, onPress, colors }: { icon: React.ReactNode; label: string; onPress: () => void; colors: MaterialColors }) {
  return (
    <TouchableOpacity
      onPress={() => { impactAsync('light'); onPress(); }}
      style={{ flex: 1, backgroundColor: colors.primary, borderRadius: 10, paddingVertical: 12, alignItems: 'center', gap: 4 }}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      {icon}
      <Text style={{ fontSize: 12, fontWeight: '600', color: colors.onPrimary }}>{label}</Text>
    </TouchableOpacity>
  );
}
