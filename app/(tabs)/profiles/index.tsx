import React, { useCallback, useMemo, useState } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { router } from 'expo-router';
import { Add, Heart, Profile, SearchNormal1 } from 'iconsax-react-native';
import { useTheme } from 'src/contexts/ThemeContext';
import { useProfileStore } from 'src/stores/profileStore';
import { impactAsync } from 'src/utils/haptics';

export default function ProfileListScreen() {
  const { theme } = useTheme();
  const { colors } = theme;
  const profiles = useProfileStore((s) => s.profiles);
  const deleteProfile = useProfileStore((s) => s.deleteProfile);

  const [search, setSearch] = useState('');
  const [groupFilter, setGroupFilter] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const groups = useMemo(() => {
    const gs = new Set(profiles.map((p) => p.group).filter(Boolean));
    return [...gs];
  }, [profiles]);

  const filtered = useMemo(() => {
    let result = profiles;
    if (search) {
      const lower = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.firstName.toLowerCase().includes(lower) ||
          p.lastName.toLowerCase().includes(lower) ||
          p.nickname.toLowerCase().includes(lower),
      );
    }
    if (groupFilter) {
      result = result.filter((p) => p.group === groupFilter);
    }
    return result;
  }, [profiles, search, groupFilter]);

  const handleDelete = useCallback(
    (id: string, name: string) => {
      Alert.alert('Delete Profile', `Remove ${name}?`, [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => deleteProfile(id),
        },
      ]);
    },
    [deleteProfile],
  );

  const renderItem = ({ item }: { item: (typeof profiles)[0] }) => {
    const initials =
      (item.firstName[0]?.toUpperCase() ?? '') + (item.lastName[0]?.toUpperCase() ?? '');
    const name = `${item.firstName} ${item.lastName}`.trim();

    return (
      <TouchableOpacity
        onPress={() => { impactAsync('light'); router.push(`/(tabs)/profiles/${item.id}`); }}
        onLongPress={() => handleDelete(item.id, name)}
        accessibilityRole="button"
        accessibilityLabel={`${name} profile`}
        style={{
          flexDirection: viewMode === 'list' ? 'row' : 'column',
          alignItems: viewMode === 'list' ? 'center' : 'flex-start',
          padding: 12,
          marginBottom: 8,
          borderRadius: 12,
          backgroundColor: colors.surfaceVariant,
          width: viewMode === 'grid' ? '48%' : '100%',
        }}
      >
        <View
          style={{
            width: viewMode === 'list' ? 44 : 56,
            height: viewMode === 'list' ? 44 : 56,
            borderRadius: viewMode === 'list' ? 22 : 28,
            backgroundColor: colors.primaryContainer,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: viewMode === 'grid' ? 8 : 0,
            marginRight: viewMode === 'list' ? 12 : 0,
          }}
        >
          {item.photo ? (
            <View />
          ) : (
            <Text style={{ fontSize: 18, fontWeight: '700', color: colors.onPrimaryContainer }}>
              {initials}
            </Text>
          )}
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{ fontSize: 15, fontWeight: '600', color: colors.onSurface }}
            numberOfLines={1}
          >
            {name}
          </Text>
          {item.nickname ? (
            <Text style={{ fontSize: 12, color: colors.onSurfaceVariant }} numberOfLines={1}>
              {'"'}{item.nickname}{'"'}
            </Text>
          ) : null}
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 2 }}>
            <Text style={{ fontSize: 11, color: colors.onSurfaceVariant }}>
              {item.type ?? 'Custom'}
            </Text>
            {item.favorite ? (
              <Heart size={12} color={colors.error} variant="Bold" />
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    );
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
        <Text style={{ fontSize: 20, fontWeight: '700', color: colors.onSurface }}>
          Profiles
        </Text>
        <TouchableOpacity onPress={() => { impactAsync('light'); router.push('/(tabs)/profiles/new'); }} accessibilityRole="button" accessibilityLabel="Add profile">
          <Add size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 16, paddingTop: 12, gap: 8 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.surfaceVariant,
            borderRadius: 10,
            paddingHorizontal: 12,
            height: 40,
          }}
        >
          <SearchNormal1 size={18} color={colors.onSurfaceVariant} />
          <TextInput
            style={{
              flex: 1,
              fontSize: 15,
              color: colors.onSurface,
              marginLeft: 8,
              padding: 0,
            }}
            placeholder="Search profiles..."
            placeholderTextColor={colors.onSurfaceVariant}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <View style={{ flexDirection: 'row', gap: 8 }}>
          <TouchableOpacity
            onPress={() => setGroupFilter('')}
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 16,
              backgroundColor: groupFilter === '' ? colors.primary : colors.surfaceVariant,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: '600',
                color: groupFilter === '' ? colors.onPrimary : colors.onSurfaceVariant,
              }}
            >
              All
            </Text>
          </TouchableOpacity>
          {groups.map((g) => (
            <TouchableOpacity
              key={g}
              onPress={() => setGroupFilter(g)}
              style={{
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 16,
                backgroundColor: groupFilter === g ? colors.primary : colors.surfaceVariant,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '600',
                  color: groupFilter === g ? colors.onPrimary : colors.onSurfaceVariant,
                }}
              >
                {g}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {filtered.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32 }}
        >
          <Profile size={48} color={colors.onSurfaceVariant} />
          <Text
            style={{
              fontSize: 16,
              color: colors.onSurfaceVariant,
              marginTop: 12,
              textAlign: 'center',
            }}
          >
            {search || groupFilter
              ? 'No profiles match your filters'
              : 'No profiles yet. Tap + to add one.'}
          </Text>
        </View>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
          numColumns={viewMode === 'grid' ? 2 : 1}
          columnWrapperStyle={viewMode === 'grid' ? { gap: 8 } : undefined}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
