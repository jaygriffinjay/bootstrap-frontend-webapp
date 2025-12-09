import { createContext, useContext, useState, useMemo } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import '@emotion/react';
import { defaultConfig, generateTheme } from './themeData';
import type { ThemeConfig, AppTheme } from './themeData';

// Re-export types for convenience
export type { ThemeConfig, AppTheme } from './themeData';

// ============================================================================
// EMOTION TYPE DECLARATION
// ============================================================================

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}

// ============================================================================
// CONTEXT
// ============================================================================

interface ThemeContextType {
  config: ThemeConfig;
  theme: AppTheme;
  updateConfig: (updates: Partial<ThemeConfig>) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<ThemeConfig>(defaultConfig);
  
  const theme = useMemo(() => generateTheme(config), [config]);
  
  const updateConfig = (updates: Partial<ThemeConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };
  
  return (
    <ThemeContext.Provider value={{ config, theme, updateConfig }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}

// ============================================================================
// EMOTION BRIDGE (connects your context to Emotion's styled())
// ============================================================================

function EmotionBridge({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  return (
    <EmotionThemeProvider theme={theme}>
      {children}
    </EmotionThemeProvider>
  );
}

// ============================================================================
// ALL-IN-ONE WRAPPER (this is what you use in main.tsx)
// ============================================================================

export function ThemeProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <EmotionBridge>
        {children}
      </EmotionBridge>
    </ThemeProvider>
  );
}
