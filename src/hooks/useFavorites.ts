import { useState } from 'react';
import { Alert } from 'react-native';

export interface Meal {
  id: string;
  name: string;
  image: string;
  isFavorite: boolean;
}

export const useFavorites = (initialMeals: Meal[] = []) => {
  const [favoriteMeals, setFavoriteMeals] = useState<Meal[]>(initialMeals);

  const removeFavorite = (mealId: string) => {
    Alert.alert(
      'Remove from Favorites',
      'Are you sure you want to remove this meal from favorites?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            setFavoriteMeals((prevMeals) =>
              prevMeals.filter((meal) => meal.id !== mealId)
            );
          },
        },
      ]
    );
  };

  const handleMealPress = (meal: Meal) => {
    Alert.alert(meal.name, 'Meal details coming soon!', [{ text: 'OK' }]);
  };

  const addFavorite = (meal: Meal) => {
    setFavoriteMeals((prevMeals) => [...prevMeals, meal]);
  };

  const toggleFavorite = (mealId: string) => {
    setFavoriteMeals((prevMeals) =>
      prevMeals.map((meal) =>
        meal.id === mealId ? { ...meal, isFavorite: !meal.isFavorite } : meal
      )
    );
  };

  return {
    favoriteMeals,
    removeFavorite,
    handleMealPress,
    addFavorite,
    toggleFavorite,
  };
};
