import { useMemo } from 'react';
import { useThemeContext } from '../theme/themeContext';

export const useWeeklyPlannerStyles = () => {
  const { isDark, theme } = useThemeContext();

  const dynamicStyles = useMemo(
    () => ({
      container: {
        backgroundColor: isDark ? theme.colors.background : '#FFF5F9',
      },
      header: {
        backgroundColor: isDark ? theme.colors.card : '#FFFFFF',
      },
      titleSection: {
        backgroundColor: isDark ? theme.colors.card : '#FFFFFF',
      },
      title: {
        color: isDark ? theme.colors.textBlack : '#2C3E50',
      },
      subtitle: {
        color: isDark ? theme.colors.textLabelSecondary : '#7F8C8D',
      },
      dayCard: {
        backgroundColor: isDark ? theme.colors.card : '#FFFFFF',
      },
      dayTitle: {
        color: isDark ? theme.colors.textBlack : '#2C3E50',
      },
      noMealText: {
        color: isDark ? theme.colors.textLabelSecondary : '#7F8C8D',
      },
    }),
    [isDark, theme]
  );

  return { isDark, dynamicStyles };
};
