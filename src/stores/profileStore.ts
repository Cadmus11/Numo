import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { storage } from 'src/storage/persistence';
import type { Profile, ProfileType, ProfileFormData } from 'src/types/profile';

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

interface ProfileState {
  profiles: Profile[];
  addProfile: (profile: ProfileFormData) => string;
  updateProfile: (id: string, updates: Partial<Profile>) => void;
  deleteProfile: (id: string) => void;
  getProfile: (id: string) => Profile | undefined;
  getAllProfiles: () => Profile[];
  getProfilesByType: (type: ProfileType) => Profile[];
  searchProfiles: (query: string) => Profile[];
  getFavorites: () => Profile[];
  getByGroup: (group: string) => Profile[];
  getGroups: () => string[];
}

const profilesStorage = createJSONStorage(() => ({
  getItem: (name: string) => storage.getString(name) ?? null,
  setItem: (name: string, value: string) => storage.set(name, value),
  removeItem: (name: string) => storage.delete(name),
}));

export const useProfileStore = create<ProfileState>()(
  persist(
    (set, get) => ({
      profiles: [],

      addProfile: (profile) => {
        const id = generateId();
        const now = Date.now();
        const newProfile: Profile = { ...profile, id, createdAt: now, updatedAt: now };
        set((state) => ({ profiles: [...state.profiles, newProfile] }));
        return id;
      },

      updateProfile: (id, updates) => {
        set((state) => ({
          profiles: state.profiles.map((p) =>
            p.id === id ? { ...p, ...updates, updatedAt: Date.now() } : p
          ),
        }));
      },

      deleteProfile: (id) => {
        set((state) => ({
          profiles: state.profiles.filter((p) => p.id !== id),
        }));
      },

      getProfile: (id) => {
        return get().profiles.find((p) => p.id === id);
      },

      getAllProfiles: () => {
        return get().profiles;
      },

      getProfilesByType: (type) => {
        return get().profiles.filter((p) => p.type === type);
      },

      searchProfiles: (query) => {
        const lower = query.toLowerCase();
        return get().profiles.filter(
          (p) =>
            p.firstName.toLowerCase().includes(lower) ||
            p.lastName.toLowerCase().includes(lower) ||
            p.nickname.toLowerCase().includes(lower) ||
            p.notes.toLowerCase().includes(lower)
        );
      },

      getFavorites: () => {
        return get().profiles.filter((p) => p.favorite);
      },

      getByGroup: (group) => {
        return get().profiles.filter((p) => p.group === group);
      },

      getGroups: () => {
        const groups = new Set(
          get()
            .profiles.map((p) => p.group)
            .filter(Boolean)
        );
        return [...groups];
      },
    }),
    {
      name: '@numo/profiles',
      storage: profilesStorage,
    }
  )
);
