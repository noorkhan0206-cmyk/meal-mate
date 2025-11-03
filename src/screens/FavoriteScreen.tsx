import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Alert,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useThemeContext } from '../theme/themeContext';

interface Meal {
  id: string;
  name: string;
  image: string;
  isFavorite: boolean;
}

export default function FavoriteScreen() {
  const navigation = useNavigation();
  const { isDark, theme } = useThemeContext();
  
  // Sample favorite meals data
  const [favoriteMeals, setFavoriteMeals] = useState<Meal[]>([
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
  ]);
  
  // Dynamic styles based on theme
  const dynamicStyles = {
    container: {
      ...styles.container,
      backgroundColor: isDark ? theme.colors.background : '#FFF5F7',
    },
    header: {
      ...styles.header,
      backgroundColor: isDark ? theme.colors.card : '#FFFFFF',
    },
    titleSection: {
      ...styles.titleSection,
      backgroundColor: isDark ? theme.colors.card : '#FFFFFF',
    },
    mainTitle: {
      ...styles.mainTitle,
      color: isDark ? theme.colors.textBlack : '#2C3E50',
    },
    subtitle: {
      ...styles.subtitle,
      color: isDark ? theme.colors.textLabelSecondary : '#7F8C8D',
    },
    mealCard: {
      ...styles.mealCard,
      backgroundColor: isDark ? theme.colors.card : '#FFFFFF',
    },
    mealName: {
      ...styles.mealName,
      color: isDark ? theme.colors.textBlack : '#2C3E50',
    },
    emptyTitle: {
      ...styles.emptyTitle,
      color: isDark ? theme.colors.textBlack : '#2C3E50',
    },
    emptyText: {
      ...styles.emptyText,
      color: isDark ? theme.colors.textLabelSecondary : '#7F8C8D',
    },
  };

  // Handle calendar icon press
  const handleCalendarPress = () => {
    navigation.navigate('WeeklyPlanner');
  };

  // Handle add icon press
  const handleAddPress = () => {
    navigation.navigate('AddNewMeal');
  };

  // Handle settings icon press
  const handleSettingsPress = () => {
    navigation.navigate('Settings');
  };

  // Toggle favorite status
  const toggleFavorite = (mealId: string) => {
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

  // Handle meal card press
  const handleMealPress = (meal: Meal) => {
    Alert.alert(meal.name, 'Meal details coming soon!', [{ text: 'OK' }]);
  };

  return (
    <View style={dynamicStyles.container}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      {/* Header */}
      <View style={dynamicStyles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#FF5C58" />
        </TouchableOpacity>

        <View style={styles.headerIcons}>
          <TouchableOpacity
            style={styles.headerIcon}
            onPress={handleCalendarPress}
          >
            <Ionicons name="calendar-outline" size={24} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.headerIcon, styles.favoriteButton]}
            onPress={() => Alert.alert('Favorites', 'You are on the Favorites screen!')}
          >
            <Ionicons name="heart" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.headerIcon}
            onPress={handleAddPress}
          >
            <Ionicons name="add" size={24} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.headerIcon}
            onPress={handleSettingsPress}
          >
            <Ionicons name="settings-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Section */}
        <View style={dynamicStyles.titleSection}>
          <View style={styles.titleRow}>
            <Ionicons name="heart" size={28} color="#B4C7BE" />
            <Text style={dynamicStyles.mainTitle}>Favorites</Text>
          </View>
          <Text style={dynamicStyles.subtitle}>Your favorite meals collection</Text>
        </View>

        {/* Meals Grid */}
        {favoriteMeals.length > 0 ? (
          <View style={styles.mealsGrid}>
            {favoriteMeals.map((meal) => (
              <TouchableOpacity
                key={meal.id}
                style={dynamicStyles.mealCard}
                onPress={() => handleMealPress(meal)}
                activeOpacity={0.8}
              >
                {/* Meal Image */}
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: meal.image }}
                    style={styles.mealImage}
                    resizeMode="cover"
                  />
                  
                  {/* Favorite Heart Icon */}
                  <TouchableOpacity
                    style={styles.favoriteIcon}
                    onPress={() => toggleFavorite(meal.id)}
                    activeOpacity={0.7}
                  >
                    <Ionicons
                      name={meal.isFavorite ? 'heart' : 'heart-outline'}
                      size={24}
                      color="#FF5C58"
                    />
                  </TouchableOpacity>
                </View>

                {/* Meal Name */}
                <View style={styles.mealInfo}>
                  <Text style={dynamicStyles.mealName} numberOfLines={2}>
                    {meal.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          // Empty State
          <View style={styles.emptyState}>
            <Ionicons name="heart-outline" size={80} color={isDark ? "#5D6D7E" : "#E0E0E0"} />
            <Text style={dynamicStyles.emptyTitle}>No Favorites Yet</Text>
            <Text style={dynamicStyles.emptyText}>
              Start adding your favorite meals to see them here
            </Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleAddPress}
            >
              <Ionicons name="add" size={20} color="#fff" />
              <Text style={styles.addButtonText}>Add Your First Meal</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  headerIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  favoriteButton: {
    backgroundColor: '#B4C7BE',
  },
  scrollView: {
    flex: 1,
  },
  titleSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  mainTitle: {
    fontSize: 38,
    fontWeight: '800',
    color: '#2C3E50',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#7F8C8D',
    marginTop: 4,
    fontWeight: '400',
  },
  mealsGrid: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  mealCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 240,
  },
  mealImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F7F7F7',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  mealInfo: {
    padding: 18,
  },
  mealName: {
    fontSize: 19,
    fontWeight: '700',
    color: '#2C3E50',
    letterSpacing: 0.2,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#2C3E50',
    marginTop: 20,
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  emptyText: {
    fontSize: 16,
    color: '#7F8C8D',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
    fontWeight: '400',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A7C7E',
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 28,
    gap: 8,
    shadowColor: '#4A7C7E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
  bottomSpacing: {
    height: 40,
  },
});
