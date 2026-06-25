import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { storage, STORAGE_KEYS } from 'src/storage/persistence';

interface SplashState {
  hasSeenSplash: boolean;
  markSplashSeen: () => void;
}

const splashStorage = createJSONStorage(() => ({
  getItem: () => storage.getString(STORAGE_KEYS.SPLASH_SEEN) ?? null,
  setItem: (_, value: string) => storage.set(STORAGE_KEYS.SPLASH_SEEN, value),
  removeItem: () => storage.delete(STORAGE_KEYS.SPLASH_SEEN),
}));

export const useSplashStore = create<SplashState>()(
  persist(
    (set) => ({
      hasSeenSplash: false,
      markSplashSeen: () => set({ hasSeenSplash: true }),
    }),
    {
      name: STORAGE_KEYS.SPLASH_SEEN,
      storage: splashStorage,
    },
  ),
);
