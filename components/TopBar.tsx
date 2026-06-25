import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { HambergerMenu, Setting2 } from 'iconsax-react-native';
import { useTheme } from 'src/contexts/ThemeContext';
import { Sidebar } from './Sidebar';

export const TopBar: React.FC = () => {
  const { colors } = useTheme().theme;
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: colors.surface,
          borderBottomWidth: 1,
          borderBottomColor: colors.outlineVariant,
        }}
      >
        <TouchableOpacity onPress={() => setSidebarVisible(true)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          <HambergerMenu size={24} color={colors.onSurface} />
        </TouchableOpacity>

        <Text style={{ fontSize: 18, fontWeight: '700', color: colors.onSurface, letterSpacing: 2 }}>
          NUMO
        </Text>

        <TouchableOpacity onPress={() => router.push('/settings')} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          <Setting2 size={24} color={colors.onSurface} />
        </TouchableOpacity>
      </View>
      <Sidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} />
    </>
  );
};
