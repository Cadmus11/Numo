import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { storage } from 'src/storage/persistence';

function hashPin(pin: string): string {
  let hash = 0;
  for (let i = 0; i < pin.length; i++) {
    const char = pin.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

interface LockState {
  pinHash: string;
  setPin: (pin: string) => void;
  validatePin: (pin: string) => boolean;
  hasPin: () => boolean;
  clearPin: () => void;
}

const lockStorage = createJSONStorage(() => ({
  getItem: (name: string) => storage.getString(name) ?? null,
  setItem: (name: string, value: string) => storage.set(name, value),
  removeItem: (name: string) => storage.delete(name),
}));

export const useLockStore = create<LockState>()(
  persist(
    (set, get) => ({
      pinHash: '',

      setPin: (pin) => {
        set({ pinHash: hashPin(pin) });
      },

      validatePin: (pin) => {
        return get().pinHash === hashPin(pin);
      },

      hasPin: () => {
        return get().pinHash.length > 0;
      },

      clearPin: () => {
        set({ pinHash: '' });
      },
    }),
    {
      name: '@numo/lock',
      storage: lockStorage,
    },
  ),
);
