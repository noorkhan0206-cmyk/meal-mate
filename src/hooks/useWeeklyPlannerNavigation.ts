import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export const useWeeklyPlannerNavigation = () => {
  const navigation = useNavigation();

  const navigateToAddMeal = () => {
    navigation.navigate('AddNewMeal');
  };

  const navigateToFavorites = () => {
    navigation.navigate('Favorites');
  };

  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };

  const navigateToSplash = () => {
    navigation.navigate('Welcome');
  };

  const showCalendarAlert = () => {
    Alert.alert(
      'Weekly Planner',
      'You are already on the Weekly Planner screen!',
      [{ text: 'OK' }]
    );
  };

  return {
    navigateToAddMeal,
    navigateToFavorites,
    navigateToSettings,
    navigateToSplash,
    showCalendarAlert,
  };
};
