import type { Profile } from 'src/types/profile';
import type { JournalEntry } from 'src/stores/journalStore';
import { storage } from './persistence';

export interface BackupData {
  version: number;
  createdAt: number;
  profiles: Profile[];
  journalEntries: JournalEntry[];
  settings: {
    themeId: string;
    isDarkMode: boolean;
    likedProfiles: string[];
  };
}

const BACKUP_KEY = '@numo/backup/file';
const CURRENT_VERSION = 1;

export function createBackup(): BackupData {
  const profilesRaw = storage.getString('@numo/profiles');
  const journalRaw = storage.getString('@numo/journal');
  const settingsRaw = storage.getString('@numo/settings');

  let profiles: Profile[] = [];
  let journalEntries: JournalEntry[] = [];
  let settings = { themeId: 'cosmic-purple', isDarkMode: true, likedProfiles: [] as string[] };

  try {
    if (profilesRaw) {
      const parsed = JSON.parse(profilesRaw);
      profiles = parsed.state?.profiles ?? [];
    }
  } catch {}

  try {
    if (journalRaw) {
      const parsed = JSON.parse(journalRaw);
      journalEntries = parsed.state?.entries ?? [];
    }
  } catch {}

  try {
    if (settingsRaw) {
      const parsed = JSON.parse(settingsRaw);
      const state = parsed.state ?? {};
      settings = {
        themeId: state.themeId ?? 'cosmic-purple',
        isDarkMode: state.isDarkMode ?? true,
        likedProfiles: state.likedProfiles ?? [],
      };
    }
  } catch {}

  return {
    version: CURRENT_VERSION,
    createdAt: Date.now(),
    profiles,
    journalEntries,
    settings,
  };
}

export function saveBackupToStorage(): void {
  const backup = createBackup();
  storage.set(BACKUP_KEY, JSON.stringify(backup));
}

export function getSavedBackup(): BackupData | null {
  const raw = storage.getString(BACKUP_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as BackupData;
  } catch {
    return null;
  }
}

export function restoreBackup(data: BackupData): void {
  if (data.profiles) {
    const currentProfilesRaw = storage.getString('@numo/profiles');
    let currentProfilesState: { state: { profiles: Profile[] } } = { state: { profiles: [] } };
    try {
      if (currentProfilesRaw) currentProfilesState = JSON.parse(currentProfilesRaw);
    } catch {}
    currentProfilesState.state.profiles = data.profiles;
    storage.set('@numo/profiles', JSON.stringify(currentProfilesState));
  }

  if (data.journalEntries) {
    const currentJournalRaw = storage.getString('@numo/journal');
    let currentJournalState: { state: { entries: JournalEntry[] } } = { state: { entries: [] } };
    try {
      if (currentJournalRaw) currentJournalState = JSON.parse(currentJournalRaw);
    } catch {}
    currentJournalState.state.entries = data.journalEntries;
    storage.set('@numo/journal', JSON.stringify(currentJournalState));
  }

  if (data.settings) {
    const currentSettingsRaw = storage.getString('@numo/settings');
    let currentSettingsState = { state: {} };
    try {
      if (currentSettingsRaw) currentSettingsState = JSON.parse(currentSettingsRaw);
    } catch {}
    currentSettingsState.state = {
      ...currentSettingsState.state,
      ...data.settings,
    };
    storage.set('@numo/settings', JSON.stringify(currentSettingsState));
  }
}

export function importProfiles(profiles: Profile[]): void {
  if (!profiles.length) return;

  const currentRaw = storage.getString('@numo/profiles');
  let currentState = { state: { profiles: [] as Profile[] } };
  try {
    if (currentRaw) currentState = JSON.parse(currentRaw);
  } catch {}

  const existingIds = new Set(currentState.state.profiles.map((p) => p.id));
  const newProfiles = profiles.filter((p) => !existingIds.has(p.id));

  if (newProfiles.length > 0) {
    currentState.state.profiles = [...currentState.state.profiles, ...newProfiles];
    storage.set('@numo/profiles', JSON.stringify(currentState));
  }
}

export function getBackupJSON(): string {
  return JSON.stringify(createBackup(), null, 2);
}

export function clearBackup(): void {
  storage.delete(BACKUP_KEY);
}
