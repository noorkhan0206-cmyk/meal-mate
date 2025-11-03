import React, { createContext, useContext } from 'react';
import useGetTheme from '@hooks/useGetTheme';
import { ColorsProps, lightColors, darkColors } from './colors';

interface ThemeContextType {
  theme: ColorsProps;
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightColors,
  isDark: false,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const { rememberedTheme, saveTheme } = useGetTheme();

  const isDark = rememberedTheme.theme === 'dark';
  const theme = isDark ? darkColors : lightColors;

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    saveTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeProvider;
