import { useMemo } from 'react';
import { useThemeContext } from '../theme/themeContext';

/**
 * Common dynamic styles hook for all screens
 * Returns theme-aware colors and styles
 */
export const useCommonStyles = () => {
  const { isDark, theme } = useThemeContext();

  const colors = useMemo(
    () => ({
      background: isDark ? theme.colors.background : '#FDFCFE',
      card: isDark ? theme.colors.card : '#FFFFFF',
      text: isDark ? theme.colors.textBlack : '#4A3F5C',
      textSecondary: isDark ? theme.colors.textLabelSecondary : '#8B7BA8',
      border: isDark ? theme.colors.border : '#F5F3F8',
      primary: '#9B7EBD', // Lavender
      success: '#C8B6E2', // Light lavender
      danger: '#D47B9E', // Soft rose
      warning: '#E8DFF5', // Pale lavender
    }),
    [isDark, theme]
  );

  return { isDark, theme, colors };
};
