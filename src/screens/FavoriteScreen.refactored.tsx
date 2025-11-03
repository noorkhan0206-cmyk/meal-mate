import React from 'react';
import { View, ScrollView, StyleSheet, StatusBar, Alert } from 'react-native';
import { ScreenHeader, PageTitle } from '../components/shared';
import { MealsGrid, EmptyFavoritesState } from '../components/Favorites';
import { useScreenNavigation } from '../hooks/useScreenNavigation';
import { useCommonStyles } from '../hooks/useCommonStyles';
import { useFavorites, Meal } from '../hooks/useFavorites';

const FavoriteScreen: React.FC = () => {
  const { goBack, navigateToWeeklyPlanner, navigateToAddMeal, navigateToSettings } =
    useScreenNavigation();
  const { isDark, colors } = useCommonStyles();

  // Sample favorite meals data
  const initialMeals: Meal[] = [
    {
      id: '1',
      name: 'Spaghetti Carbonara',
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800',
      isFavorite: true,
    },
    {
      id: '2',
      name: 'Thai Green Curry',
      image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800',
      isFavorite: true,
    },
  ];

  const { favoriteMeals, removeFavorite, handleMealPress } = useFavorites(initialMeals);

  const handleFavoritesPress = () => {
    Alert.alert('Favorites', 'You are on the Favorites screen!');
  };

  const headerActions = [
    { iconName: 'calendar-outline' as const, onPress: navigateToWeeklyPlanner },
    { iconName: 'heart' as const, onPress: handleFavoritesPress, variant: 'primary' as const },
    { iconName: 'add' as const, onPress: navigateToAddMeal },
    { iconName: 'settings-outline' as const, onPress: navigateToSettings },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      {/* Header */}
      <ScreenHeader
        onBackPress={goBack}
        actions={headerActions}
        backgroundColor={colors.card}
        backIconColor="#FF5C58"
      />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Title Section */}
        <PageTitle
          title="Favorites"
          subtitle="Your favorite meals collection"
          iconName="heart"
          iconColor="#B4C7BE"
          backgroundColor={colors.card}
          titleColor={colors.text}
          subtitleColor={colors.textSecondary}
        />

        {/* Meals Grid or Empty State */}
        {favoriteMeals.length > 0 ? (
          <MealsGrid
            meals={favoriteMeals}
            onMealPress={handleMealPress}
            onFavoritePress={removeFavorite}
            cardBackgroundColor={colors.card}
            cardTextColor={colors.text}
          />
        ) : (
          <EmptyFavoritesState
            onAddPress={navigateToAddMeal}
            isDark={isDark}
            titleColor={colors.text}
            textColor={colors.textSecondary}
          />
        )}

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
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
  bottomSpacing: {
    height: 40,
  },
});

export default FavoriteScreen;
