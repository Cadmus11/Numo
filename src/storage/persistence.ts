import { Platform } from 'react-native';

let storage: {
  getString: (key: string) => string | undefined;
  set: (key: string, value: string) => void;
  delete: (key: string) => void;
  getAllKeys: () => string[];
};

if (Platform.OS === 'web') {
  const map = new Map<string, string>();
  storage = {
    getString: (key: string) => map.get(key),
    set: (key: string, value: string) => {
      map.set(key, value);
    },
    delete: (key: string) => {
      map.delete(key);
    },
    getAllKeys: () => Array.from(map.keys()),
  };
} else {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { MMKV } = require('react-native-mmkv');
  const mmkv = new MMKV({ id: 'numo-storage' });
  storage = mmkv;
}

export { storage };

export function getStorageItem<T>(key: string): T | null {
  const value = storage.getString(key);
  if (!value) return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

export function setStorageItem<T>(key: string, value: T): void {
  storage.set(key, JSON.stringify(value));
}

export function removeStorageItem(key: string): void {
  storage.delete(key);
}

export function getAllKeys(): string[] {
  return storage.getAllKeys();
}

export const STORAGE_KEYS = {
  PROFILES: '@numo/profiles',
  SETTINGS: '@numo/settings',
  JOURNAL_ENTRIES: '@numo/journal/entries',
  JOURNAL_INDEX: '@numo/journal/index',
  BACKUP: '@numo/backup',
  SPLASH_SEEN: '@numo/splashSeen',
} as const;
