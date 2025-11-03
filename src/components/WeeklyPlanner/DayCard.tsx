import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Meal } from '../../services/mealsService';

interface DayCardProps {
  day: string;
  meals?: Meal[];
  onAddMeal: () => void;
  backgroundColor: string;
  titleColor: string;
  noMealTextColor: string;
}

export const DayCard: React.FC<DayCardProps> = ({
  day,
  meals = [],
  onAddMeal,
  backgroundColor,
  titleColor,
  noMealTextColor,
}) => {
  const mealsCount = meals.length;
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={[styles.dayTitle, { color: titleColor }]}>{day}</Text>

      {/* Meals List or Empty State */}
      {mealsCount === 0 ? (
        <>
          {/* Add Button */}
          <TouchableOpacity style={styles.addButton} onPress={onAddMeal}>
            <Ionicons name="add" size={32} color="#5DADE2" />
          </TouchableOpacity>

          {/* No Meal Text */}
          <Text style={[styles.noMealText, { color: noMealTextColor }]}>
            No meal planned
          </Text>

          {/* Add Meal Button */}
          <TouchableOpacity style={styles.addMealButton} onPress={onAddMeal}>
            <Text style={styles.addMealText}>Add Meal</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          {/* Meals List */}
          <View style={styles.mealsContainer}>
            {meals.map((meal, index) => (
              <View key={meal.id || index} style={styles.mealCard}>
                <View style={styles.mealImageContainer}>
                  {meal.imageBase64 ? (
                    <Image
                      source={{
                        uri: `data:image/jpeg;base64,${meal.imageBase64}`,
                      }}
                      style={styles.mealImage}
                      resizeMode="cover"
                    />
                  ) : (
                    <View style={styles.mealImagePlaceholder}>
                      <Ionicons name="restaurant" size={24} color="#BDC3C7" />
                    </View>
                  )}
                </View>

                <View style={styles.mealContent}>
                  <View style={styles.mealHeader}>
                    <Text style={styles.mealTitle}>{meal.title}</Text>
                    <View style={styles.mealBadge}>
                      <Text style={styles.mealBadgeText}>Meal</Text>
                    </View>
                  </View>

                  <View style={styles.mealDetails}>
                    <Ionicons name="list-outline" size={14} color="#95A5A6" />
                    <Text style={styles.mealIngredients} numberOfLines={2}>
                      {meal.ingredients}
                    </Text>
                  </View>

                  <View style={styles.mealFooter}>
                    <View style={styles.mealTime}>
                      <Ionicons name="time-outline" size={12} color="#95A5A6" />
                      <Text style={styles.mealTimeText}>Ready to cook</Text>
                    </View>
                    <TouchableOpacity style={styles.mealAction}>
                      <Ionicons
                        name="chevron-forward"
                        size={16}
                        color="#5DADE2"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>

          {/* Add Another Button */}
          <TouchableOpacity style={styles.addAnotherButton} onPress={onAddMeal}>
            <Ionicons name="add-circle-outline" size={20} color="#5DADE2" />
            <Text style={styles.addAnotherText}>Add Another Meal</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  dayTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    letterSpacing: 0.2,
  },
  addButton: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#E7F6F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    shadowColor: '#48C9B0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 2,
  },
  noMealText: {
    fontSize: 15,
    marginBottom: 12,
    fontWeight: '400',
  },
  addMealButton: {
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  addMealText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#5DADE2',
    letterSpacing: 0.2,
  },
  mealsContainer: {
    width: '100%',
    gap: 16,
  },
  mealCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  mealImageContainer: {
    height: 140,
    width: '100%',
  },
  mealImage: {
    width: '100%',
    height: '100%',
  },
  mealImagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9ECEF',
    borderStyle: 'dashed',
  },
  mealContent: {
    padding: 16,
  },
  mealHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2C3E50',
    flex: 1,
    marginRight: 8,
  },
  mealBadge: {
    backgroundColor: '#E7F6F2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  mealBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#48C9B0',
  },
  mealDetails: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    marginBottom: 12,
  },
  mealIngredients: {
    fontSize: 14,
    color: '#7F8C8D',
    lineHeight: 20,
    flex: 1,
  },
  mealFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mealTime: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  mealTimeText: {
    fontSize: 12,
    color: '#95A5A6',
  },
  mealAction: {
    padding: 4,
  },
  addAnotherButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 12,
    paddingVertical: 10,
  },
  addAnotherText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5DADE2',
  },
});
