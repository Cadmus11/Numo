import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { storage } from 'src/storage/persistence';

export interface CachedCalculation {
  profileId: string;
  data: Record<string, unknown>;
  timestamp: number;
}

interface CalculationState {
  cache: Record<string, CachedCalculation>;
  setCache: (profileId: string, data: Record<string, unknown>) => void;
  getCache: (profileId: string) => Record<string, unknown> | null;
  invalidateCache: (profileId: string) => void;
  clearAllCache: () => void;
}

const calcStorage = createJSONStorage(() => ({
  getItem: (name: string) => storage.getString(name) ?? null,
  setItem: (name: string, value: string) => storage.set(name, value),
  removeItem: (name: string) => storage.delete(name),
}));

export const useCalculationStore = create<CalculationState>()(
  persist(
    (set, get) => ({
      cache: {},

      setCache: (profileId, data) => {
        set((state) => ({
          cache: {
            ...state.cache,
            [profileId]: { profileId, data, timestamp: Date.now() },
          },
        }));
      },

      getCache: (profileId) => {
        const entry = get().cache[profileId];
        if (!entry) return null;
        const age = Date.now() - entry.timestamp;
        if (age > 86400000) {
          get().invalidateCache(profileId);
          return null;
        }
        return entry.data;
      },

      invalidateCache: (profileId) => {
        set((state) => {
          const { [profileId]: _, ...rest } = state.cache;
          return { cache: rest };
        });
      },

      clearAllCache: () => set({ cache: {} }),
    }),
    {
      name: '@numo/calculations',
      storage: calcStorage,
    }
  )
);
