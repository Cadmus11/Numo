import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const RADIUS = 45;
const STROKE_WIDTH = 8;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function getScoreColor(score: number): string {
  if (score >= 80) return '#22C55E';
  if (score >= 60) return '#EAB308';
  if (score >= 40) return '#F97316';
  return '#EF4444';
}

function getScoreLabel(score: number): string {
  if (score >= 80) return 'Excellent';
  if (score >= 60) return 'Good';
  if (score >= 40) return 'Moderate';
  return 'Challenging';
}

interface GaugeScoreProps {
  score: number;
  label: string;
  color?: string;
}

export const GaugeScore: React.FC<GaugeScoreProps> = ({ score, label, color }) => {
  const progress = useSharedValue(0);
  const scoreColor = color ?? getScoreColor(score);

  useEffect(() => {
    progress.value = withTiming(score / 100, { duration: 1000 });
  }, [score, progress]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCUMFERENCE * (1 - progress.value),
  }));

  return (
    <View style={{ alignItems: 'center', width: 110 }}>
      <View style={{ width: 100, height: 100, justifyContent: 'center', alignItems: 'center' }}>
        <Svg width={100} height={100} viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r={RADIUS}
            stroke="#333"
            strokeWidth={STROKE_WIDTH}
            fill="none"
            opacity={0.3}
          />
          <AnimatedCircle
            cx="50"
            cy="50"
            r={RADIUS}
            stroke={scoreColor}
            strokeWidth={STROKE_WIDTH}
            fill="none"
            strokeDasharray={CIRCUMFERENCE}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            animatedProps={animatedProps}
          />
        </Svg>
        <View style={{ position: 'absolute', alignItems: 'center' }}>
          <Text style={{ fontSize: 22, fontWeight: '800', color: scoreColor }}>{score}%</Text>
        </View>
      </View>
      <Text style={{ fontSize: 13, fontWeight: '600', color: '#CCC', marginTop: 4 }}>{label}</Text>
      <Text style={{ fontSize: 11, color: scoreColor, fontWeight: '500' }}>
        {getScoreLabel(score)}
      </Text>
    </View>
  );
};
