import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { storage } from 'src/storage/persistence';

export type Mood = 'great' | 'good' | 'neutral' | 'low' | 'bad';
export type GoalCategory = 'career' | 'finance' | 'relationships' | 'health' | 'spiritual';

export interface JournalEntry {
  id: string;
  date: string;
  title: string;
  body: string;
  mood: Mood;
  tags: string[];
  goalCategory: GoalCategory;
  personalDayNumber: number;
  personalMonthNumber: number;
  personalYearNumber: number;
  createdAt: number;
  updatedAt: number;
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

interface JournalState {
  entries: JournalEntry[];
  addEntry: (entry: Omit<JournalEntry, 'id' | 'createdAt' | 'updatedAt'>) => string;
  updateEntry: (id: string, updates: Partial<JournalEntry>) => void;
  deleteEntry: (id: string) => void;
  getEntry: (id: string) => JournalEntry | undefined;
  getEntriesByDate: (date: string) => JournalEntry[];
  getEntriesByMonth: (year: number, month: number) => JournalEntry[];
  getEntriesByDateRange: (start: string, end: string) => JournalEntry[];
  getEntriesByTags: (tags: string[]) => JournalEntry[];
  getEntriesByMood: (mood: Mood) => JournalEntry[];
  getAllTags: () => string[];
  searchEntries: (query: string) => JournalEntry[];
  getEntriesByCategory: (category: GoalCategory) => JournalEntry[];
}

const journalStorage = createJSONStorage(() => ({
  getItem: (name: string) => storage.getString(name) ?? null,
  setItem: (name: string, value: string) => storage.set(name, value),
  removeItem: (name: string) => storage.delete(name),
}));

export const useJournalStore = create<JournalState>()(
  persist(
    (set, get) => ({
      entries: [],

      addEntry: (entry) => {
        const id = generateId();
        const now = Date.now();
        const newEntry: JournalEntry = { ...entry, id, createdAt: now, updatedAt: now };
        set((state) => ({ entries: [newEntry, ...state.entries] }));
        return id;
      },

      updateEntry: (id, updates) => {
        set((state) => ({
          entries: state.entries.map((e) =>
            e.id === id ? { ...e, ...updates, updatedAt: Date.now() } : e
          ),
        }));
      },

      deleteEntry: (id) => {
        set((state) => ({
          entries: state.entries.filter((e) => e.id !== id),
        }));
      },

      getEntry: (id) => {
        return get().entries.find((e) => e.id === id);
      },

      getEntriesByDate: (date) => {
        return get().entries.filter((e) => e.date === date);
      },

      getEntriesByMonth: (year, month) => {
        const prefix = `${year}-${String(month).padStart(2, '0')}`;
        return get().entries.filter((e) => e.date.startsWith(prefix));
      },

      getEntriesByDateRange: (start, end) => {
        return get().entries.filter((e) => e.date >= start && e.date <= end);
      },

      getEntriesByTags: (tags) => {
        return get().entries.filter((e) => tags.some((t) => e.tags.includes(t)));
      },

      getEntriesByMood: (mood) => {
        return get().entries.filter((e) => e.mood === mood);
      },

      getAllTags: () => {
        const tagSet = new Set<string>();
        get().entries.forEach((e) => e.tags.forEach((t) => tagSet.add(t)));
        return [...tagSet].sort();
      },

      searchEntries: (query) => {
        const lower = query.toLowerCase();
        return get().entries.filter(
          (e) =>
            e.title.toLowerCase().includes(lower) ||
            e.body.toLowerCase().includes(lower) ||
            e.tags.some((t) => t.toLowerCase().includes(lower))
        );
      },

      getEntriesByCategory: (category) => {
        return get().entries.filter((e) => e.goalCategory === category);
      },
    }),
    {
      name: '@numo/journal',
      storage: journalStorage,
    }
  )
);
