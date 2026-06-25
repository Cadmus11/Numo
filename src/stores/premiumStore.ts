import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { storage } from 'src/storage/persistence';
import type { FeatureId } from 'src/data/featureFlags';

interface PremiumState {
  isPremium: boolean;
  unlockedFeatures: FeatureId[];
  setPremium: (value: boolean) => void;
  unlockFeature: (featureId: FeatureId) => void;
  lockFeature: (featureId: FeatureId) => void;
  isFeatureUnlocked: (featureId: FeatureId) => boolean;
  unlockAll: () => void;
  reset: () => void;
}

const premiumStorage = createJSONStorage(() => ({
  getItem: (name: string) => storage.getString(name) ?? null,
  setItem: (name: string, value: string) => storage.set(name, value),
  removeItem: (name: string) => storage.delete(name),
}));

export const usePremiumStore = create<PremiumState>()(
  persist(
    (set, get) => ({
      isPremium: false,
      unlockedFeatures: [],

      setPremium: (value) => set({ isPremium: value }),

      unlockFeature: (featureId) => {
        const { unlockedFeatures } = get();
        if (!unlockedFeatures.includes(featureId)) {
          set({ unlockedFeatures: [...unlockedFeatures, featureId] });
        }
      },

      lockFeature: (featureId) => {
        set((state) => ({
          unlockedFeatures: state.unlockedFeatures.filter((f) => f !== featureId),
        }));
      },

      isFeatureUnlocked: (featureId) => {
        const state = get();
        if (state.isPremium) return true;
        return state.unlockedFeatures.includes(featureId);
      },

      unlockAll: () => {
        set({ isPremium: true });
      },

      reset: () => {
        set({ isPremium: false, unlockedFeatures: [] });
      },
    }),
    {
      name: '@numo/premium',
      storage: premiumStorage,
    }
  )
);
