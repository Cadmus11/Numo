# NUMO — Build Phases

## Phase 0: Foundation

**Goal:** Set up the project skeleton with Expo Router, Zustand stores, MMKV persistence, and a working navigation shell.

### Tasks

- [ ] Install missing dependencies (`expo-router`, `zustand`, `react-native-mmkv`, `lucide-react-native`, `victory-native`)
- [ ] Create `app/` directory with Expo Router file-based routing
  - `app/_layout.tsx` — root layout (ThemeProvider, SafeAreaProvider, store initialization)
  - `app/(tabs)/_layout.tsx` — tab navigator (Home, Profiles, Compare, Journal, Tools)
  - `app/(tabs)/index.tsx` — Home placeholder
  - `app/settings.tsx` — migrate existing SettingsScreen
- [ ] Update `app.json` for Expo Router entry point
- [ ] Set up Zustand stores:
  - `src/stores/profileStore.ts` — profile CRUD with MMKV persistence
  - `src/stores/settingsStore.ts` — theme/scheme/backup settings
  - `src/stores/journalStore.ts` — journal entries linked to dates
  - `src/stores/calculationStore.ts` — cached numerology results
- [ ] Create MMKV persistence middleware: `src/storage/persistence.ts`
- [ ] Remove old navigation code (`AppContext.tsx`, manual screen switching in `App.tsx`)
- [ ] Adapt Sidebar/TopBar for Expo Router navigation
- [ ] Verify the app boots with `npx expo start --web` and passes lint

### Deliverables
- Working tab-based navigation with 5 tabs
- Zustand stores wired to MMKV for offline persistence
- Settings screen functional (theme picker, dark mode toggle)

---

## Phase 1: Numerology Engine

**Goal:** Build the complete pure-TypeScript numerology calculation engine with zero UI dependencies.

### Tasks

- [ ] **`src/engine/reduction.ts`**
  - Digit summing until single digit or master number (11/22/33)
  - `reduceNumber(n: number): number`
  - `isMasterNumber(n: number): boolean`
- [ ] **`src/engine/pythagorean.ts`**
  - Pythagorean letter-to-number map (A=1, B=2, …, Z=8)
  - `letterToNumber(char: string): number`
  - `nameToNumbers(name: string): number[]`
- [ ] **`src/engine/lifePath.ts`**
  - Life Path Number from date of birth
  - Day of Birth Number (birth day digit sum)
  - Attitude Number (month + day)
- [ ] **`src/engine/nameNumbers.ts`**
  - Expression Number (full name sum)
  - Soul Urge Number (vowels only)
  - Personality Number (consonants only)
- [ ] **`src/engine/derivedNumbers.ts`**
  - Maturity Number (Life Path + Expression)
  - Generation Number (birth year)
  - Cornerstone (first letter of first name)
  - Capstone (last letter of full name)
  - Balance Number (initials)
  - Rational Thought Number (Life Path + Expression analysis)
  - Subconscious Self Number (distinct numbers present in name chart)
- [ ] **`src/engine/karmic.ts`**
  - Karmic Lessons (missing numbers 1–9 from name chart)
  - Karmic Debt detection (13, 14, 16, 19)
- [ ] **`src/engine/challenges.ts`**
  - First Challenge, Second Challenge, Third Challenge, Fourth Challenge
- [ ] **`src/engine/pinnacles.ts`**
  - Four Pinnacle Cycles (Youth → Development → Achievement → Legacy)
  - Each with age range, number, opportunities, challenges
- [ ] **`src/engine/cycles.ts`**
  - Personal Year (birth month + birth day + current year)
  - Personal Month (Personal Year + current month)
  - Personal Day (Personal Month + current day)
  - Universal Year (current year reduced)
  - Universal Month (Universal Year + current month)
  - Universal Day (Universal Month + current day)
- [ ] **`src/engine/compatibility.ts`**
  - Numerology compatibility scoring (Life Path, Soul Urge, Personality, Expression)
  - Returns Love / Friendship / Business scores 0–100
- [ ] **`src/engine/lucky.ts`**
  - Lucky numbers, days, months, colors derived from Life Path + Personal Year
- [ ] **`src/engine/index.ts`**
  - `calculateFullProfile(data: ProfileData): FullNumerologyReport`
  - Master orchestrator calling all sub-engines

### Deliverables
- `src/engine/` — ~12 pure TS modules with no side effects
- Full profile calculation: all numbers, karmic data, cycles, challenges, pinnacles
- Compatible with any UI — testable in Node or React Native

---

## Phase 2: Chinese Zodiac Engine

**Goal:** Build the Chinese Zodiac system — animal profiles, compatibility, elements, enemy signs, triangles.

### Tasks

- [ ] **`src/engine/zodiac/animals.ts`**
  - Animal determination from birth year
  - 12 animal enum (Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig)
  - `getAnimal(year: number): Animal`
  - `getAnimalYears(animal: Animal, startYear: number, count: number): number[]`
- [ ] **`src/engine/zodiac/elements.ts`**
  - Five Elements determination (Wood, Fire, Earth, Metal, Water)
  - Element cycle based on birth year last digit
  - `getElement(year: number): Element`
- [ ] **`src/engine/zodiac/compatibility.ts`**
  - Love / Friendship / Business compatibility table (12×12 matrix)
  - Rating: Excellent, Good, Moderate, Challenging
- [ ] **`src/engine/zodiac/enemySigns.ts`**
  - 6 direct enemy pairs
  - Conflict areas and growth advice
- [ ] **`src/engine/zodiac/triangles.ts`**
  - 4 alliance groups (3 animals each)
  - Secret Friend system (hidden compatible animal)
- [ ] **`src/engine/zodiac/index.ts`**
  - `getFullZodiacProfile(year: number): ZodiacProfile`

### Deliverables
- `src/engine/zodiac/` — complete zodiac engine
- Animal + element + compatibility + enemy + triangle calculations

---

## Phase 3: Combined Compatibility Engine

**Goal:** Merge numerology and zodiac compatibility into a unified scoring system.

### Tasks

- [ ] **`src/engine/combined.ts`**
  - `compareProfiles(a: FullNumerologyReport, b: FullNumerologyReport): CombinedCompatibility`
  - Weighted scoring: numerology (50%) + zodiac (50%)
  - Love Score 0–100, Friendship Score 0–100, Business Score 0–100
  - Overall rating text
  - Detailed strengths, conflicts, and recommendations

### Deliverables
- One combined compatibility function
- Produces narrative report text alongside numeric scores

---

## Phase 4: Interpretations & Content Data

**Goal:** Create all the textual content — number meanings, zodiac profiles, compatibility descriptions, lucky elements, affirmations.

### Tasks

- [ ] **`src/data/lifePathMeanings.ts`** — 1–9, 11, 22, 33 (personality, strengths, weaknesses, career, relationships)
- [ ] **`src/data/nameNumberMeanings.ts`** — Expression, Soul Urge, Personality (1–9, 11, 22, 33)
- [ ] **`src/data/birthDayMeanings.ts`** — Day of Birth 1–31
- [ ] **`src/data/attitudeMeanings.ts`** — Attitude 1–9, 11, 22
- [ ] **`src/data/karmicMeanings.ts`** — Debt numbers 13/14/16/19, lessons for missing 1–9
- [ ] **`src/data/challengeMeanings.ts`** — Challenge numbers 1–9
- [ ] **`src/data/pinnacleMeanings.ts`** — Pinnacle cycle numbers 1–9, 11, 22
- [ ] **`src/data/cycleMeanings.ts`** — Personal Year 1–9, Month 1–9, Day 1–9
- [ ] **`src/data/zodiacData.ts`** — 12 animal profiles (personality, strengths, weaknesses, love, career, finance, health)
- [ ] **`src/data/zodiacCompatibilityText.ts`** — Compatibility narrative by animal pair
- [ ] **`src/data/luckyElements.ts`** — Master lookup: lucky numbers, days, colors by Life Path
- [ ] **`src/data/affirmations.ts`** — Affirmations keyed by Life Path + Personal Year
- [ ] **`src/data/knowledgeLibrary.ts`** — Educational articles (how numerology works, calculation methods, interpretation guides)

### Deliverables
- `src/data/` — full content database for all interpretations
- Every number 1–9 + master numbers covered for each category

---

## Phase 5: Profile Management

**Goal:** Full CRUD for profiles with form validation, search, favorites, grouping.

### Tasks

- [ ] **Profile data types**: `src/types/profile.ts`
  - `Profile` interface with all fields (name, DOB, gender, photo, notes, type, favorite, group, createdAt, updatedAt)
- [ ] **Profile store** (`src/stores/profileStore.ts`):
  - `addProfile`, `updateProfile`, `deleteProfile`, `getProfile`, `getAllProfiles`
  - `searchProfiles(query)`, `getFavorites`, `getByGroup`
- [ ] **Profile list screen** (`app/(tabs)/profiles/index.tsx`):
  - Grid/list toggle, search bar, group filter
  - Quick actions (compare with me, compatibility check, generate report)
  - Swipe to delete (with confirmation)
- [ ] **Profile form screen** (`app/(tabs)/profiles/new.tsx`, `app/(tabs)/profiles/[id]/edit.tsx`):
  - Form fields: First, Middle, Last, Nickname, DOB (date picker), Gender, Photo picker, Notes, Type selector
  - Validation (required fields, date range)
- [ ] **Profile detail screen** (`app/(tabs)/profiles/[id].tsx`):
  - Tab view: Overview, Numerology, Zodiac, Karmic, Cycles, Forecast
  - Header with avatar, name, quick stats

### Deliverables
- Complete profile CRUD with search/filter/group
- Profile detail with full numerology and zodiac breakdown
- Favorites system

---

## Phase 6: Home / Daily Dashboard

**Goal:** The default landing screen showing today's energies.

### Tasks

- [ ] **`app/(tabs)/index.tsx`**:
  - Current Personal Day number + interpretation card
  - Current Personal Month number + interpretation card
  - Current Personal Year number + interpretation card
  - Current Universal Year (global energy) card
  - Lucky widget: lucky number, color, day, activity
  - Daily affirmation (generated from Life Path + Personal Year)
  - Energy forecast strip (next 7 days with green/yellow/red indicators)
  - Quick action buttons: Add Reflection, Compare, View Report

### Deliverables
- Rich daily dashboard screen
- Auto-calculated daily energies based on active profile

---

## Phase 7: Compatibility Screen

**Goal:** Compare two profiles side by side with detailed scoring.

### Tasks

- [ ] **`app/(tabs)/compare/index.tsx`**:
  - Profile picker (select two profiles)
  - Score gauges: Love, Friendship, Business (0–100%)
  - Numerology breakdown: Life Path, Soul Urge, Personality, Expression comparison
  - Zodiac breakdown: animal compatibility, enemy check, element harmony
  - Relationship timeline forecast (current month/year)
  - Detailed narrative report (strengths, conflicts, advice)

### Deliverables
- Full compatibility analysis between any two profiles
- Combined numerology + zodiac scoring

---

## Phase 8: Journal System

**Goal:** Offline personal journal linked to personal daily/monthly energy.

### Tasks

- [ ] **`app/(tabs)/journal/index.tsx`**:
  - Journal entry list (sorted by date)
  - Calendar view with entry indicators
- [ ] **Entry screen** (`app/(tabs)/journal/new.tsx`, `app/(tabs)/journal/[id].tsx`):
  - Rich text entry (title, body, mood, tags)
  - Auto-linked to Personal Day/Month energy
  - Goal association (career, finance, relationships, health, spiritual)
- [ ] **Journal store**: CRUD, search, tag filtering, date range queries

### Deliverables
- Full offline journal with energy-linked entries
- Calendar heat map view

---

## Phase 9: Tools Module

**Goal:** Business name, phone number, house number, and baby name analyzers.

### Tasks

- [ ] **Name Analysis Lab** (`app/(tabs)/tools/name.tsx`):
  - Input full name → shows Expression, Soul Urge, Personality
  - Name change simulator: compare current vs alternative
- [ ] **Business Numerology** (`app/(tabs)/tools/business.tsx`):
  - Company/startup/product name analysis
  - Expression Number + success potential + branding insights
- [ ] **Phone Number Numerology** (`app/(tabs)/tools/phone.tsx`):
  - Mobile/landline analysis
  - Energy pattern + communication strength
- [ ] **House Number Numerology** (`app/(tabs)/tools/house.tsx`):
  - House/apartment number analysis
  - Home energy + prosperity indicators
- [ ] **Baby Name Analysis** (`app/(tabs)/tools/baby.tsx`):
  - Analyze prospective names
  - Expression + Soul Urge + Personality
  - Suggestions: strong, balanced, creative names

### Deliverables
- 5 standalone tool screens using the same engine

---

## Phase 10: Reports & Export

**Goal:** Generate, view, share, and export profile reports.

### Tasks

- [ ] **`app/reports.tsx`**:
  - Report list (generated reports sorted by date)
  - Report preview screen
- [ ] **Report generation**: `src/reports/generator.ts`
  - Compiles full profile data into structured report
  - Sections: Personal Summary, All Numbers, Karmic Analysis, Zodiac, Compatibility Summary, Current Year Forecast
- [ ] **Export formats**:
  - PDF (via react-native-pdf-lib)
  - Share text (via React Native Share API)
  - Print support

### Deliverables
- Full profile report generation
- PDF and text export

---

## Phase 11: Knowledge Library

**Goal:** Offline searchable educational content.

### Tasks

- [ ] **`app/(tabs)/tools/knowledge.tsx`**:
  - Article list categorized (Numerology, Chinese Zodiac, Guides)
  - Search bar
  - Article detail screen
- [ ] **Content**: All articles from `src/data/knowledgeLibrary.ts`

### Deliverables
- Browseable, searchable offline knowledge base

---

## Phase 12: Data Management

**Goal:** Backup, restore, import, and local encryption.

### Tasks

- [ ] **Backup** (`src/storage/backup.ts`):
  - JSON export of all profiles, journal entries, settings
  - Encrypted backup option (basic PIN/device auth)
- [ ] **Restore**: Import JSON backup file and restore full app state
- [ ] **Import profiles**: Import from exported JSON
- [ ] **Local encryption**: Lock app with PIN / biometric

### Deliverables
- Full backup/restore system
- PIN/biometric lock

---

## Phase 13: Knowledge Library (Splash)

**Goal:** Splash screen with NUMO branding.

### Tasks

- [ ] Animated splash with NUMO logo
- [ ] Smooth transition to home dashboard

### Deliverables
- Branded animated splash

---

## Phase 14: Polish & Performance

**Goal:** Animations, haptics, error states, accessibility.

### Tasks

- [ ] Screen transition animations (Reanimated)
- [ ] Card entry animations (staggered fade-in)
- [ ] Haptic feedback on key interactions
- [ ] Keyboard-aware forms
- [ ] Empty states for all lists
- [ ] Error boundaries per route
- [ ] Loading skeletons for calculations
- [ ] Accessibility labels and roles

### Deliverables
- Polished, smooth UX with feedback on all interactions

---

## Phase 15: Future / Premium

**Goal:** Features gated for future monetization.

### Tasks

- [ ] Advanced reports with more detail
- [ ] Unlimited compatibility reports
- [ ] Business Numerology full access
- [ ] Baby Name Analysis full access
- [ ] PDF export with branding
- [ ] AI features (optional, online): AI Life Advice, AI Relationship Insights, AI Numerology Coach, AI Goal Guidance

### Deliverables
- Premium feature flags and gating infrastructure
(Not implemented in MVP)
