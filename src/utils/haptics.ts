import { Platform } from 'react-native';

type ImpactLevel = 'light' | 'medium' | 'heavy';

let HapticsModule: { impactAsync: (style: any) => void; notificationAsync: (type: any) => void; selectionAsync: () => void; ImpactFeedbackStyle: any; NotificationFeedbackType: any } | null = null;

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  HapticsModule = require('expo-haptics');
} catch {}

export function impactAsync(level: ImpactLevel = 'medium') {
  if (!HapticsModule || Platform.OS === 'web') return;
  const map: Record<ImpactLevel, any> = {
    light: HapticsModule.ImpactFeedbackStyle.Light,
    medium: HapticsModule.ImpactFeedbackStyle.Medium,
    heavy: HapticsModule.ImpactFeedbackStyle.Heavy,
  };
  HapticsModule.impactAsync(map[level]);
}

export function notificationAsync(type: 'success' | 'warning' | 'error' = 'success') {
  if (!HapticsModule || Platform.OS === 'web') return;
  const map: Record<string, any> = {
    success: HapticsModule.NotificationFeedbackType.Success,
    warning: HapticsModule.NotificationFeedbackType.Warning,
    error: HapticsModule.NotificationFeedbackType.Error,
  };
  HapticsModule.notificationAsync(map[type]);
}

export function selectionAsync() {
  if (!HapticsModule || Platform.OS === 'web') return;
  HapticsModule.selectionAsync();
}
