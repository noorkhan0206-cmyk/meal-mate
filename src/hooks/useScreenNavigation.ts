import { useNavigation } from '@react-navigation/native';

/**
 * Centralized navigation hook for all screens
 * Provides type-safe navigation functions
 */
export const useScreenNavigation = () => {
  const navigation = useNavigation();

  return {
    goBack: () => navigation.goBack(),
    navigateToWeeklyPlanner: () => navigation.navigate('WeeklyPlanner'),
    navigateToAddMeal: () => navigation.navigate('AddNewMeal'),
    navigateToFavorites: () => navigation.navigate('Favorites'),
    navigateToSettings: () => navigation.navigate('Settings'),
    navigateToWelcome: () => navigation.navigate('Welcome'),
    navigateToHome: () => navigation.navigate('HomeTabs'),
  };
};
