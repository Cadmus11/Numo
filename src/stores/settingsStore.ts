import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { storage } from 'src/storage/persistence';

interface SettingsState {
  themeId: string;
  isDarkMode: boolean;
  likedProfiles: string[];
  setThemeId: (id: string) => void;
  setDarkMode: (dark: boolean) => void;
  toggleLikedProfile: (profileId: string) => void;
  isProfileLiked: (profileId: string) => boolean;
}

const settingsStorage = createJSONStorage(() => ({
  getItem: (name: string) => storage.getString(name) ?? null,
  setItem: (name: string, value: string) => storage.set(name, value),
  removeItem: (name: string) => storage.delete(name),
}));

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      themeId: 'cosmic-purple',
      isDarkMode: true,
      likedProfiles: [],

      setThemeId: (id: string) => set({ themeId: id }),

      setDarkMode: (dark: boolean) => set({ isDarkMode: dark }),

      toggleLikedProfile: (profileId: string) => {
        const { likedProfiles } = get();
        if (likedProfiles.includes(profileId)) {
          set({ likedProfiles: likedProfiles.filter((id) => id !== profileId) });
        } else {
          set({ likedProfiles: [...likedProfiles, profileId] });
        }
      },

      isProfileLiked: (profileId: string) => {
        return get().likedProfiles.includes(profileId);
      },
    }),
    {
      name: '@numo/settings',
      storage: settingsStorage,
    }
  )
);
