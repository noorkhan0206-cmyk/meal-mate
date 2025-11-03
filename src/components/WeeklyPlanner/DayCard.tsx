import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface DayCardProps {
  day: string;
  mealsCount?: number;
  onAddMeal: () => void;
  backgroundColor: string;
  titleColor: string;
  noMealTextColor: string;
}

export const DayCard: React.FC<DayCardProps> = ({
  day,
  mealsCount = 0,
  onAddMeal,
  backgroundColor,
  titleColor,
  noMealTextColor,
}) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={[styles.dayTitle, { color: titleColor }]}>{day}</Text>
      
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
});
