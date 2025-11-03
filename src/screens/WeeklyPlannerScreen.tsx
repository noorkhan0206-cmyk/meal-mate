import React, { useState, useCallback } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { DayCard, Header, TitleSection } from '../components/WeeklyPlanner';
import { DAYS_OF_WEEK } from '../constants/weeklyPlanner';
import { useWeeklyPlannerNavigation } from '../hooks/useWeeklyPlannerNavigation';
import { useWeeklyPlannerStyles } from '../hooks/useWeeklyPlannerStyles';
import { useAppSelector } from '@store';
import { authSelector } from '@store/auth/selectors';
import { getAllUserMeals, Meal } from '../services/mealsService';

const WeeklyPlannerScreen: React.FC = () => {
  const { isDark, dynamicStyles } = useWeeklyPlannerStyles();
  const {
    navigateToAddMeal,
    navigateToFavorites,
    navigateToSettings,
    navigateToSplash,
    showCalendarAlert,
  } = useWeeklyPlannerNavigation();

  const userData = useAppSelector(authSelector.getUserData);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch meals when screen comes into focus
  const fetchMeals = async () => {
    if (!userData?.uid) return;

    setLoading(true);
    try {
      const userMeals = await getAllUserMeals(userData.uid);
      setMeals(userMeals);
    } catch (error) {
      console.error('Error fetching meals:', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [userData?.uid]),
  );

  // Get meals for a specific day
  const getMealsForDay = (day: string): Meal[] => {
    return meals.filter((meal) => meal.dayOfWeek === day);
  };

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      {/* Header with navigation icons */}
      <Header
        onLogoPress={navigateToSplash}
        onCalendarPress={showCalendarAlert}
        onFavoritesPress={navigateToFavorites}
        onAddPress={navigateToAddMeal}
        onSettingsPress={navigateToSettings}
        isDark={isDark}
        backgroundColor={dynamicStyles.header.backgroundColor}
      />

      {/* Title Section */}
      <TitleSection
        title="Weekly Planner"
        subtitle="Plan your meals for the week ahead"
        backgroundColor={dynamicStyles.titleSection.backgroundColor}
        titleColor={dynamicStyles.title.color}
        subtitleColor={dynamicStyles.subtitle.color}
      />

      {/* Days List */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {DAYS_OF_WEEK.map((day, index) => {
          const dayMeals = getMealsForDay(day);
          return (
            <DayCard
              key={`${day}-${index}`}
              day={day}
              meals={dayMeals}
              onAddMeal={() => navigateToAddMeal(day)}
              backgroundColor={dynamicStyles.dayCard.backgroundColor}
              titleColor={dynamicStyles.dayTitle.color}
              noMealTextColor={dynamicStyles.noMealText.color}
            />
          );
        })}
      </ScrollView>

      {/* Floating Action Button
      <FloatingActionButton
        label="Create New Meal"
        onPress={navigateToAddMeal}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
});

export default WeeklyPlannerScreen;
