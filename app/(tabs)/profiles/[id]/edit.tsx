import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, TickCircle } from 'iconsax-react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTheme } from 'src/contexts/ThemeContext';
import type { MaterialColors } from 'src/contexts/ThemeContext';
import { useProfileStore } from 'src/stores/profileStore';
import type { ProfileType } from 'src/types/profile';

const PROFILE_TYPES: ProfileType[] = [
  'Self', 'Partner', 'Friend', 'Family Member', 'Child', 'Business Partner', 'Client', 'Custom',
];

export default function EditProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme } = useTheme();
  const { colors } = theme;
  const profile = useProfileStore((s) => s.profiles.find((p) => p.id === id));
  const updateProfile = useProfileStore((s) => s.updateProfile);

  const [firstName, setFirstName] = useState(profile?.firstName ?? '');
  const [middleName, setMiddleName] = useState(profile?.middleName ?? '');
  const [lastName, setLastName] = useState(profile?.lastName ?? '');
  const [nickname, setNickname] = useState(profile?.nickname ?? '');
  const [dateOfBirth, setDateOfBirth] = useState(
    profile ? new Date(profile.dateOfBirth) : new Date(1990, 0, 1),
  );
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [gender, setGender] = useState(profile?.gender ?? '');
  const [notes, setNotes] = useState(profile?.notes ?? '');
  const [type, setType] = useState<ProfileType>(profile?.type ?? 'Friend');
  const [group, setGroup] = useState(profile?.group ?? '');

  if (!profile) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: colors.onSurface }}>Profile not found</Text>
      </View>
    );
  }

  const handleSave = () => {
    if (!firstName.trim()) {
      Alert.alert('Validation', 'First name is required.');
      return;
    }

    const dobStr = dateOfBirth.toISOString().split('T')[0];
    updateProfile(profile.id, {
      firstName: firstName.trim(),
      middleName: middleName.trim(),
      lastName: lastName.trim(),
      nickname: nickname.trim(),
      dateOfBirth: dobStr,
      gender,
      notes: notes.trim(),
      type,
      group: group.trim(),
    });

    router.back();
  };

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
        <Text style={{ fontSize: 18, fontWeight: '700', color: colors.onSurface }}>
          Edit Profile
        </Text>
        <TouchableOpacity onPress={handleSave}>
          <TickCircle size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.onSurfaceVariant, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
          Name
        </Text>
        <Input label="First Name *" value={firstName} onChangeText={setFirstName} colors={colors} />
        <Input label="Middle Name" value={middleName} onChangeText={setMiddleName} colors={colors} />
        <Input label="Last Name" value={lastName} onChangeText={setLastName} colors={colors} />
        <Input label="Nickname" value={nickname} onChangeText={setNickname} colors={colors} />

        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.onSurfaceVariant, marginTop: 16, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
          Birth Details
        </Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 10,
            paddingHorizontal: 14,
            paddingVertical: 12,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 15, color: colors.onSurface }}>
            {dateOfBirth.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={dateOfBirth}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            maximumDate={new Date()}
            onChange={(_event, d) => {
              setShowDatePicker(Platform.OS !== 'ios');
              if (d) setDateOfBirth(d);
            }}
          />
        )}

        <Input label="Gender" value={gender} onChangeText={setGender} colors={colors} />

        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.onSurfaceVariant, marginTop: 16, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
          Type
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          {PROFILE_TYPES.map((t) => (
            <TouchableOpacity
              key={t}
              onPress={() => setType(t)}
              style={{
                paddingHorizontal: 14,
                paddingVertical: 8,
                borderRadius: 20,
                backgroundColor: type === t ? colors.primary : colors.surfaceVariant,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '600',
                  color: type === t ? colors.onPrimary : colors.onSurfaceVariant,
                }}
              >
                {t}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.onSurfaceVariant, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
          Group
        </Text>
        <Input label="Group (e.g. Family, Work)" value={group} onChangeText={setGroup} colors={colors} />

        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.onSurfaceVariant, marginTop: 16, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
          Notes
        </Text>
        <TextInput
          style={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 10,
            paddingHorizontal: 14,
            paddingVertical: 12,
            fontSize: 15,
            color: colors.onSurface,
            minHeight: 80,
            textAlignVertical: 'top',
          }}
          placeholder="Add notes..."
          placeholderTextColor={colors.onSurfaceVariant}
          value={notes}
          onChangeText={setNotes}
          multiline
        />
      </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

function Input({
  label,
  value,
  onChangeText,
  colors,
}: {
  label: string;
  value: string;
  onChangeText: (t: string) => void;
  colors: MaterialColors;
}) {
  return (
    <TextInput
      style={{
        backgroundColor: colors.surfaceVariant,
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 15,
        color: colors.onSurface,
        marginBottom: 10,
      }}
      placeholder={label}
      placeholderTextColor={colors.onSurfaceVariant}
      value={value}
      onChangeText={onChangeText}
    />
  );
}
