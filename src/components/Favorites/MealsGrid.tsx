import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FavoriteMealCard } from './FavoriteMealCard';

interface Meal {
  id: string;
  name: string;
  image: string;
  isFavorite: boolean;
}

interface MealsGridProps {
  meals: Meal[];
  onMealPress: (meal: Meal) => void;
  onFavoritePress: (mealId: string) => void;
  cardBackgroundColor?: string;
  cardTextColor?: string;
}

export const MealsGrid: React.FC<MealsGridProps> = ({
  meals,
  onMealPress,
  onFavoritePress,
  cardBackgroundColor,
  cardTextColor,
}) => {
  return (
    <View style={styles.grid}>
      {meals.map((meal) => (
        <FavoriteMealCard
          key={meal.id}
          id={meal.id}
          name={meal.name}
          image={meal.image}
          isFavorite={meal.isFavorite}
          onPress={() => onMealPress(meal)}
          onFavoritePress={() => onFavoritePress(meal.id)}
          backgroundColor={cardBackgroundColor}
          textColor={cardTextColor}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
});
