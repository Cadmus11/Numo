import React, { useMemo, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Edit2, Heart } from 'iconsax-react-native';
import { useTheme } from 'src/contexts/ThemeContext';
import type { MaterialColors } from 'src/contexts/ThemeContext';
import { useProfileStore } from 'src/stores/profileStore';
import { calculateFullProfile } from 'src/engine';
import { getFullZodiacProfile } from 'src/engine/zodiac';

type TabKey = 'overview' | 'numerology' | 'zodiac' | 'karmic' | 'cycles' | 'forecast';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'overview', label: 'Overview' },
  { key: 'numerology', label: 'Numerology' },
  { key: 'zodiac', label: 'Zodiac' },
  { key: 'karmic', label: 'Karmic' },
  { key: 'cycles', label: 'Cycles' },
  { key: 'forecast', label: 'Forecast' },
];

export default function ProfileDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme } = useTheme();
  const { colors } = theme;
  const profile = useProfileStore((s) => s.profiles.find((p) => p.id === id));
  const updateProfile = useProfileStore((s) => s.updateProfile);
  const [activeTab, setActiveTab] = useState<TabKey>('overview');

  const birthDate = profile ? new Date(profile.dateOfBirth) : null;

  const report = useMemo(() => {
    if (!profile || !birthDate) return null;
    return calculateFullProfile(
      {
        firstName: profile.firstName,
        middleName: profile.middleName,
        lastName: profile.lastName,
        birthDay: birthDate.getDate(),
        birthMonth: birthDate.getMonth() + 1,
        birthYear: birthDate.getFullYear(),
      },
      { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() },
    );
  }, [profile, birthDate]);

  const zodiacProfile = useMemo(() => {
    if (!birthDate) return null;
    return getFullZodiacProfile(birthDate.getFullYear());
  }, [birthDate]);

  if (!profile) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: colors.onSurface }}>Profile not found</Text>
      </View>
    );
  }

  const initials = `${profile.firstName[0] ?? ''}${profile.lastName[0] ?? ''}`.toUpperCase();
  const fullName = `${profile.firstName} ${profile.lastName}`.trim();
  const age = birthDate
    ? Math.floor(
        (Date.now() - birthDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000),
      )
    : null;

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
        }}
      >
        <TouchableOpacity onPress={() => router.back()} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          <ArrowLeft size={24} color={colors.onSurface} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: '700', color: colors.onSurface, flex: 1, textAlign: 'center' }} numberOfLines={1}>
          {fullName}
        </Text>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <TouchableOpacity
            onPress={() => updateProfile(profile.id, { favorite: !profile.favorite })}
          >
            <Heart
              size={22}
              color={profile.favorite ? colors.error : colors.onSurfaceVariant}
              variant={profile.favorite ? 'Bold' : 'Linear'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push(`/(tabs)/profiles/${id}/edit`)}>
            <Edit2 size={22} color={colors.onSurfaceVariant} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
          paddingVertical: 20,
          borderBottomWidth: 1,
          borderBottomColor: colors.outlineVariant,
        }}
      >
        <View
          style={{
            width: 72,
            height: 72,
            borderRadius: 36,
            backgroundColor: colors.primaryContainer,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: '700', color: colors.onPrimaryContainer }}>
            {initials}
          </Text>
        </View>
        <Text style={{ fontSize: 18, fontWeight: '700', color: colors.onSurface }}>
          {fullName}
        </Text>
        {profile.nickname ? (
          <Text style={{ fontSize: 14, color: colors.onSurfaceVariant }}>
            {'"'}{profile.nickname}{'"'}
          </Text>
        ) : null}
        <View style={{ flexDirection: 'row', gap: 12, marginTop: 4 }}>
          <Text style={{ fontSize: 13, color: colors.onSurfaceVariant }}>
            {profile.dateOfBirth} {age ? `(${age} yrs)` : ''}
          </Text>
          <Text style={{ fontSize: 13, color: colors.onSurfaceVariant }}>
            {profile.type}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderBottomWidth: 1,
          borderBottomColor: colors.outlineVariant,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {TABS.map((tab) => (
            <TouchableOpacity
              key={tab.key}
              onPress={() => setActiveTab(tab.key)}
              style={{
                paddingHorizontal: 14,
                paddingVertical: 8,
                borderRadius: 20,
                backgroundColor: activeTab === tab.key ? colors.primary : 'transparent',
                marginRight: 6,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '600',
                  color: activeTab === tab.key ? colors.onPrimary : colors.onSurfaceVariant,
                }}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        {activeTab === 'overview' && (
          <OverviewTab report={report} zodiacProfile={zodiacProfile} colors={colors} profile={profile} />
        )}
        {activeTab === 'numerology' && (
          <NumerologyTab report={report} colors={colors} />
        )}
        {activeTab === 'zodiac' && (
          <ZodiacTab zodiacProfile={zodiacProfile} colors={colors} />
        )}
        {activeTab === 'karmic' && (
          <KarmicTab report={report} colors={colors} />
        )}
        {activeTab === 'cycles' && (
          <CyclesTab report={report} colors={colors} />
        )}
        {activeTab === 'forecast' && (
          <ForecastTab report={report} colors={colors} />
        )}
      </ScrollView>
    </View>
  );
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

function NumberRow({ label, value, colors }: { label: string; value: number | string | null; colors: MaterialColors }) {
  if (value === null || value === undefined) return null;
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 }}>
      <Text style={{ fontSize: 14, color: colors.onSurfaceVariant }}>{label}</Text>
      <Text style={{ fontSize: 14, fontWeight: '700', color: colors.onSurface }}>{value}</Text>
    </View>
  );
}

function OverviewTab({ report, zodiacProfile, colors, profile }: any) {
  return (
    <View>
      {profile.notes ? (
        <InfoCard title="Notes" colors={colors}>
          <Text style={{ fontSize: 14, color: colors.onSurface }}>{profile.notes}</Text>
        </InfoCard>
      ) : null}
      {report && (
        <InfoCard title="Life Path" colors={colors}>
          <Text style={{ fontSize: 32, fontWeight: '800', color: colors.primary, textAlign: 'center' }}>
            {report.lifePath}
          </Text>
          <Text style={{ fontSize: 13, color: colors.onSurfaceVariant, textAlign: 'center', marginTop: 4 }}>
            Expression {report.expression} · Soul Urge {report.soulUrge} · Personality {report.personality}
          </Text>
        </InfoCard>
      )}
      {zodiacProfile && (
        <InfoCard title="Zodiac Sign" colors={colors}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: colors.onSurface, textAlign: 'center' }}>
            {zodiacProfile.animal}
          </Text>
          <Text style={{ fontSize: 13, color: colors.onSurfaceVariant, textAlign: 'center' }}>
            {zodiacProfile.element} · {zodiacProfile.yinYang}
          </Text>
        </InfoCard>
      )}
    </View>
  );
}

function NumerologyTab({ report, colors }: any) {
  if (!report) return <Text style={{ color: colors.onSurfaceVariant }}>Unable to calculate numerology.</Text>;
  return (
    <View>
      <InfoCard title="Core Numbers" colors={colors}>
        <NumberRow label="Life Path" value={report.lifePath} colors={colors} />
        <NumberRow label="Expression" value={report.expression} colors={colors} />
        <NumberRow label="Soul Urge" value={report.soulUrge} colors={colors} />
        <NumberRow label="Personality" value={report.personality} colors={colors} />
      </InfoCard>
      <InfoCard title="Birth Numbers" colors={colors}>
        <NumberRow label="Day of Birth" value={report.dayOfBirth} colors={colors} />
        <NumberRow label="Attitude" value={report.attitude} colors={colors} />
        <NumberRow label="Generation" value={report.generation} colors={colors} />
      </InfoCard>
      <InfoCard title="Derived Numbers" colors={colors}>
        <NumberRow label="Maturity" value={report.maturity} colors={colors} />
        <NumberRow label="Cornerstone" value={report.cornerstone} colors={colors} />
        <NumberRow label="Capstone" value={report.capstone} colors={colors} />
        <NumberRow label="Balance" value={report.balance} colors={colors} />
        <NumberRow label="Subconscious Self" value={report.subconsciousSelf} colors={colors} />
      </InfoCard>
    </View>
  );
}

function ZodiacTab({ zodiacProfile, colors }: any) {
  if (!zodiacProfile) return <Text style={{ color: colors.onSurfaceVariant }}>Unable to calculate zodiac profile.</Text>;
  return (
    <View>
      <InfoCard title="Animal Sign" colors={colors}>
        <Text style={{ fontSize: 24, fontWeight: '800', color: colors.primary, textAlign: 'center' }}>{zodiacProfile.animal}</Text>
      </InfoCard>
      <InfoCard title="Element" colors={colors}>
        <NumberRow label="Fixed Element" value={zodiacProfile.element} colors={colors} />
        <NumberRow label="Yin / Yang" value={zodiacProfile.yinYang} colors={colors} />
      </InfoCard>
      <InfoCard title="Alliance" colors={colors}>
        <Text style={{ fontSize: 14, color: colors.onSurface }}>
          {zodiacProfile.allianceGroup ? zodiacProfile.allianceGroup.title : 'None'}
        </Text>
      </InfoCard>
      <InfoCard title="Secret Friend" colors={colors}>
        <Text style={{ fontSize: 14, color: colors.onSurface }}>
          {zodiacProfile.secretFriend ?? 'None'}
        </Text>
      </InfoCard>
    </View>
  );
}

function KarmicTab({ report, colors }: any) {
  if (!report) return <Text style={{ color: colors.onSurfaceVariant }}>Unable to calculate karmic data.</Text>;
  return (
    <View>
      <InfoCard title="Karmic Lessons" colors={colors}>
        {report.karmicLessons && report.karmicLessons.length > 0 ? (
          <Text style={{ fontSize: 14, color: colors.onSurface }}>
            Missing numbers: {report.karmicLessons.join(', ')}
          </Text>
        ) : (
          <Text style={{ fontSize: 14, color: colors.onSurface }}>All numbers 1–9 are present.</Text>
        )}
      </InfoCard>
      <InfoCard title="Karmic Debts" colors={colors}>
        {report.karmicDebts && report.karmicDebts.length > 0 ? (
          report.karmicDebts.map((debt: number) => (
            <Text key={debt} style={{ fontSize: 14, fontWeight: '700', color: colors.error, marginBottom: 2 }}>
              {debt}
            </Text>
          ))
        ) : (
          <Text style={{ fontSize: 14, color: colors.onSurface }}>No karmic debt numbers detected.</Text>
        )}
      </InfoCard>
      <InfoCard title="Challenges" colors={colors}>
        {report.challenges && (
          <>
            <NumberRow label="First" value={report.challenges.first} colors={colors} />
            <NumberRow label="Second" value={report.challenges.second} colors={colors} />
            <NumberRow label="Third" value={report.challenges.third} colors={colors} />
            <NumberRow label="Fourth" value={report.challenges.fourth} colors={colors} />
          </>
        )}
      </InfoCard>
    </View>
  );
}

function CyclesTab({ report, colors }: any) {
  if (!report) return <Text style={{ color: colors.onSurfaceVariant }}>Unable to calculate cycles.</Text>;
  return (
    <View>
      <InfoCard title="Personal Cycles" colors={colors}>
        <NumberRow label="Personal Year" value={report.personalCycles?.personalYear} colors={colors} />
        <NumberRow label="Personal Month" value={report.personalCycles?.personalMonth} colors={colors} />
        <NumberRow label="Personal Day" value={report.personalCycles?.personalDay} colors={colors} />
      </InfoCard>
      <InfoCard title="Universal Cycles" colors={colors}>
        <NumberRow label="Universal Year" value={report.universalCycles?.universalYear} colors={colors} />
        <NumberRow label="Universal Month" value={report.universalCycles?.universalMonth} colors={colors} />
        <NumberRow label="Universal Day" value={report.universalCycles?.universalDay} colors={colors} />
      </InfoCard>
      <InfoCard title="Pinnacles" colors={colors}>
        {report.pinnacles?.map((p: any, i: number) => (
          <View key={i} style={{ marginBottom: 4 }}>
            <Text style={{ fontSize: 14, color: colors.onSurface }}>
              Pinnacle {i + 1}: {p.number} (ages {p.ageStart}–{p.ageEnd})
            </Text>
          </View>
        ))}
      </InfoCard>
    </View>
  );
}

function ForecastTab({ report, colors }: any) {
  if (!report) return <Text style={{ color: colors.onSurfaceVariant }}>Unable to calculate forecast.</Text>;
  return (
    <View>
      <InfoCard title="Current Energy" colors={colors}>
        <NumberRow label="Personal Year" value={report.personalCycles?.personalYear} colors={colors} />
        <NumberRow label="Personal Month" value={report.personalCycles?.personalMonth} colors={colors} />
        <NumberRow label="Personal Day" value={report.personalCycles?.personalDay} colors={colors} />
      </InfoCard>
      <InfoCard title="Lucky Elements" colors={colors}>
        <Text style={{ fontSize: 14, color: colors.onSurface }}>
          Numbers: {report.lucky?.numbers?.join(', ')}
        </Text>
        <Text style={{ fontSize: 14, color: colors.onSurface }}>
          Days: {report.lucky?.days?.join(', ')}
        </Text>
        <Text style={{ fontSize: 14, color: colors.onSurface }}>
          Colors: {report.lucky?.colors?.join(', ')}
        </Text>
      </InfoCard>
      {report.pinnacles && (
        <InfoCard title="Current Pinnacle" colors={colors}>
          {report.pinnacles
            .filter((p: any) => {
              const age = 30;
              return age >= p.ageStart && age <= p.ageEnd;
            })
            .map((p: any, i: number) => (
              <Text key={i} style={{ fontSize: 14, fontWeight: '700', color: colors.onSurface }}>
                Pinnacle {p.number} (ages {p.ageStart}–{p.ageEnd})
              </Text>
            ))}
        </InfoCard>
      )}
    </View>
  );
}
