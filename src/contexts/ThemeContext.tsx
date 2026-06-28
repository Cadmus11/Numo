import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';
import Color from 'color';
import { themes, type ThemeDefinition } from 'src/data/themes';

export interface MaterialColors {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  shadow: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
}

export type ThemeScheme = 'light' | 'dark';

export interface Theme {
  id: string;
  name: string;
  definition: ThemeDefinition;
  scheme: ThemeScheme;
  colors: MaterialColors;
  isDark: boolean;
}

interface ThemeContextValue {
  theme: Theme;
  availableThemes: ThemeDefinition[];
  selectTheme: (themeId: string) => void;
  toggleScheme: () => void;
  setScheme: (scheme: ThemeScheme) => void;
}

function chooseReadable(light: string, dark: string, bg: string): string {
  return Color(bg).isDark() ? light : dark;
}

function lighten(hex: string, amount: number): string {
  return Color(hex).lighten(amount).hex();
}

function darken(hex: string, amount: number): string {
  return Color(hex).darken(amount).hex();
}

function mix(base: string, other: string, weight: number): string {
  return Color(base).mix(Color(other), weight).hex();
}

function fade(hex: string, ratio: number): string {
  return Color(hex).fade(ratio).hexa();
}

function generateDarkPalette(def: ThemeDefinition): MaterialColors {
  const { colors } = def;
  const c = colors;
  const surfaceColor = Color(c.surface);

  return {
    primary: c.primary,
    onPrimary: chooseReadable('#FFFFFF', '#000000', c.primary),
    primaryContainer: mix(c.primary, c.surface, 0.7),
    onPrimaryContainer: lighten(c.primary, 0.3),
    secondary: c.secondary,
    onSecondary: chooseReadable('#FFFFFF', '#000000', c.secondary),
    secondaryContainer: mix(c.secondary, c.surface, 0.7),
    onSecondaryContainer: lighten(c.secondary, 0.3),
    tertiary: c.accent,
    onTertiary: chooseReadable('#FFFFFF', '#000000', c.accent),
    tertiaryContainer: mix(c.accent, c.surface, 0.7),
    onTertiaryContainer: lighten(c.accent, 0.3),
    error: '#EF4444',
    onError: '#FFFFFF',
    errorContainer: '#3B0A0A',
    onErrorContainer: '#FCA5A5',
    background: c.background,
    onBackground: c.text,
    surface: c.surface,
    onSurface: c.text,
    surfaceVariant: lighten(c.surface, 0.08),
    onSurfaceVariant: fade(c.text, 0.2),
    outline: surfaceColor.lighten(0.2).hex(),
    outlineVariant: surfaceColor.lighten(0.1).hex(),
    shadow: '#000000',
    inverseSurface: lighten(c.surface, 0.6),
    inverseOnSurface: darken(c.text, 0.6),
    inversePrimary: c.primary,
  };
}

function generateLightPalette(def: ThemeDefinition): MaterialColors {
  const { colors } = def;
  const c = colors;
  const lightBg = '#FFFFFF';
  const lightSurface = '#F8F9FA';
  const lightText = '#1C1B1F';

  return {
    primary: darken(c.primary, 0.1),
    onPrimary: '#FFFFFF',
    primaryContainer: mix(c.primary, lightBg, 0.15),
    onPrimaryContainer: darken(c.primary, 0.3),
    secondary: darken(c.secondary, 0.1),
    onSecondary: '#FFFFFF',
    secondaryContainer: mix(c.secondary, lightBg, 0.15),
    onSecondaryContainer: darken(c.secondary, 0.3),
    tertiary: darken(c.accent, 0.1),
    onTertiary: '#FFFFFF',
    tertiaryContainer: mix(c.accent, lightBg, 0.15),
    onTertiaryContainer: darken(c.accent, 0.3),
    error: '#B3261E',
    onError: '#FFFFFF',
    errorContainer: '#F9DEDC',
    onErrorContainer: '#410E0B',
    background: lightBg,
    onBackground: lightText,
    surface: lightSurface,
    onSurface: lightText,
    surfaceVariant: '#E7E0EC',
    onSurfaceVariant: '#49454F',
    outline: '#79747E',
    outlineVariant: '#CAC4D0',
    shadow: '#000000',
    inverseSurface: '#313033',
    inverseOnSurface: '#F4EFF4',
    inversePrimary: c.primary,
  };
}

const defaultThemeId = 'cosmic-purple';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemScheme = useColorScheme() ?? 'light';
  const [scheme, setSchemeState] = useState<ThemeScheme>(systemScheme);
  const [themeId, setThemeId] = useState<string>(defaultThemeId);
  const userToggled = useRef(false);

  useEffect(() => {
    if (!userToggled.current) {
      setSchemeState(systemScheme);
    }
  }, [systemScheme]);

  const selectTheme = useCallback((id: string) => {
    setThemeId(id);
  }, []);

  const toggleScheme = useCallback(() => {
    userToggled.current = true;
    setSchemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const setScheme = useCallback((s: ThemeScheme) => {
    userToggled.current = true;
    setSchemeState(s);
  }, []);

  const value = useMemo(() => {
    const def = themes.find((t) => t.id === themeId) ?? themes[0];
    const isDark = scheme === 'dark';
    const colors = isDark ? generateDarkPalette(def) : generateLightPalette(def);

    const theme: Theme = {
      id: def.id,
      name: def.name,
      definition: def,
      scheme,
      colors,
      isDark,
    };

    return { theme, availableThemes: themes, selectTheme, toggleScheme, setScheme };
  }, [themeId, scheme, selectTheme, toggleScheme, setScheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
