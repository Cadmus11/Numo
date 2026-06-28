import React, { useEffect, useRef } from 'react';
import { Animated, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useSplashStore } from 'src/stores/splashStore';

export default function SplashScreen() {
  const router = useRouter();
  const markSplashSeen = useSplashStore((s) => s.markSplashSeen);

  const containerOpacity = useRef(new Animated.Value(1)).current;
  const logoScale = useRef(new Animated.Value(0.3)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(logoScale, {
          toValue: 1,
          friction: 4,
          tension: 40,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(taglineOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(1000),
      Animated.parallel([
        Animated.timing(containerOpacity, {
          toValue: 0,
          duration: 350,
          useNativeDriver: true,
        }),
        Animated.timing(logoScale, {
          toValue: 1.1,
          duration: 350,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      markSplashSeen();
      router.replace('/(tabs)');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: '#0F0B1D',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: containerOpacity,
      }}>
      <Animated.View style={{ opacity: logoOpacity, transform: [{ scale: logoScale }] }}>
        <Text style={{ fontSize: 64, fontWeight: '800', color: '#C084FC', letterSpacing: 12 }}>
          NUMO
        </Text>
      </Animated.View>
      <Animated.View style={{ opacity: taglineOpacity, marginTop: 16 }}>
        <Text
          style={{ fontSize: 14, color: '#8B5CF6', letterSpacing: 4, textTransform: 'uppercase' }}>
          Numerology & Chinese Zodiac
        </Text>
      </Animated.View>
    </Animated.View>
  );
}
