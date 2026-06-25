import React, { useEffect } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'src/contexts/ThemeContext';

const SIDEBAR_WIDTH = 280;

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ visible, onClose }) => {
  const { colors } = useTheme().theme;
  const insets = useSafeAreaInsets();

  const translateX = useSharedValue(-SIDEBAR_WIDTH);
  const overlayOpacity = useSharedValue(0);

  useEffect(() => {
    translateX.value = withTiming(visible ? 0 : -SIDEBAR_WIDTH, { duration: 250 });
    overlayOpacity.value = withTiming(visible ? 1 : 0, { duration: 250 });
  }, [visible]);

  const sidebarStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: overlayOpacity.value,
  }));

  const navigateTo = (path: string) => {
    router.push(path as any);
    onClose();
  };

  const PremiumItem = ({ label, icon, colors: c }: { label: string; icon: string; colors: any; onPress: () => void }) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 10,
        marginBottom: 2,
        opacity: 0.5,
      }}
    >
      <Text style={{ fontSize: 14, marginRight: 10 }}>{icon}</Text>
      <Text style={{ fontSize: 14, color: c.onSurface, fontWeight: '500' }}>{label}</Text>
      <View
        style={{
          marginLeft: 'auto',
          paddingHorizontal: 8,
          paddingVertical: 2,
          borderRadius: 6,
          backgroundColor: c.primary + '30',
        }}
      >
        <Text style={{ fontSize: 10, color: c.primary, fontWeight: '700' }}>PRO</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 90,
          },
          overlayStyle,
        ]}
      >
        <Pressable style={{ flex: 1 }} onPress={onClose} />
      </Animated.View>

      <Animated.View
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: SIDEBAR_WIDTH,
            backgroundColor: colors.surface,
            zIndex: 100,
            paddingTop: insets.top + 16,
            paddingHorizontal: 16,
            shadowColor: '#000',
            shadowOffset: { width: 2, height: 0 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 10,
          },
          sidebarStyle,
        ]}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            color: colors.primary,
            letterSpacing: 2,
            marginBottom: 32,
            textAlign: 'center',
          }}
        >
          NUMO
        </Text>

        <TouchableOpacity
          onPress={() => navigateTo('/(tabs)')}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 12,
            borderRadius: 12,
            marginBottom: 4,
            backgroundColor: colors.primaryContainer,
          }}
        >
          <Text style={{ fontSize: 16, color: colors.onPrimaryContainer, fontWeight: '600' }}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigateTo('/(tabs)/profiles')}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 12,
            borderRadius: 12,
            marginBottom: 4,
          }}
        >
          <Text style={{ fontSize: 16, color: colors.onSurface, fontWeight: '600' }}>
            Profiles
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigateTo('/(tabs)/compare')}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 12,
            borderRadius: 12,
            marginBottom: 4,
          }}
        >
          <Text style={{ fontSize: 16, color: colors.onSurface, fontWeight: '600' }}>
            Compatibility
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigateTo('/(tabs)/journal')}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 12,
            borderRadius: 12,
            marginBottom: 4,
          }}
        >
          <Text style={{ fontSize: 16, color: colors.onSurface, fontWeight: '600' }}>
            Journal
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigateTo('/(tabs)/tools')}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 12,
            borderRadius: 12,
            marginBottom: 4,
          }}
        >
          <Text style={{ fontSize: 16, color: colors.onSurface, fontWeight: '600' }}>
            Tools
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigateTo('/settings')}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 12,
            borderRadius: 12,
            marginBottom: 4,
          }}
        >
          <Text style={{ fontSize: 16, color: colors.onSurface, fontWeight: '600' }}>
            Settings
          </Text>
        </TouchableOpacity>

        <View
          style={{
            height: 1,
            backgroundColor: colors.outlineVariant,
            marginVertical: 16,
          }}
        />

        <Text
          style={{
            fontSize: 11,
            fontWeight: '700',
            color: colors.onSurfaceVariant,
            letterSpacing: 1,
            textTransform: 'uppercase',
            marginBottom: 8,
            paddingHorizontal: 12,
          }}
        >
          NUMO Pro
        </Text>

        <PremiumItem label="Advanced Reports" icon={'\u2B50'} colors={colors} onPress={() => {}} />
        <PremiumItem label="Unlimited Compatibility" icon={'\u2665\uFE0F'} colors={colors} onPress={() => {}} />
        <PremiumItem label="Business Numerology" icon={'\uD83D\uDCCA'} colors={colors} onPress={() => {}} />
        <PremiumItem label="Baby Name Analysis" icon={'\uD83D\uDC76'} colors={colors} onPress={() => {}} />
        <PremiumItem label="AI Coach (Online)" icon={'\uD83E\uDD16'} colors={colors} onPress={() => {}} />
      </Animated.View>
    </>
  );
};
