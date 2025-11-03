import React from 'react';
import { View, ScrollView, StyleSheet, StatusBar } from 'react-native';
import {
  Header,
  TitleSection,
  DayCard,
  FloatingActionButton,
} from '../components/WeeklyPlanner';
import { useWeeklyPlannerNavigation } from '../hooks/useWeeklyPlannerNavigation';
import { useWeeklyPlannerStyles } from '../hooks/useWeeklyPlannerStyles';
import { DAYS_OF_WEEK } from '../constants/weeklyPlanner';

const WeeklyPlannerScreen: React.FC = () => {
  // Custom hooks for separation of concerns
  const { isDark, dynamicStyles } = useWeeklyPlannerStyles();
  const {
    navigateToAddMeal,
    navigateToFavorites,
    navigateToSettings,
    navigateToSplash,
    showCalendarAlert,
  } = useWeeklyPlannerNavigation();

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
        {DAYS_OF_WEEK.map((day, index) => (
          <DayCard
            key={`${day}-${index}`}
            day={day}
            mealsCount={0}
            onAddMeal={navigateToAddMeal}
            backgroundColor={dynamicStyles.dayCard.backgroundColor}
            titleColor={dynamicStyles.dayTitle.color}
            noMealTextColor={dynamicStyles.noMealText.color}
          />
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <FloatingActionButton
        label="Create New Meal"
        onPress={navigateToAddMeal}
      />
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
