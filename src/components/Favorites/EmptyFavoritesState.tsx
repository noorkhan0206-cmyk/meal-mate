import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton } from '../shared';

interface EmptyFavoritesStateProps {
  onAddPress: () => void;
  isDark?: boolean;
  titleColor?: string;
  textColor?: string;
}

export const EmptyFavoritesState: React.FC<EmptyFavoritesStateProps> = ({
  onAddPress,
  isDark = false,
  titleColor = '#2C3E50',
  textColor = '#7F8C8D',
}) => {
  const iconColor = isDark ? '#5D6D7E' : '#E0E0E0';

  return (
    <View style={styles.container}>
      <Ionicons name="heart-outline" size={80} color={iconColor} />
      
      <Text style={[styles.title, { color: titleColor }]}>
        No Favorites Yet
      </Text>
      
      <Text style={[styles.text, { color: textColor }]}>
        Start adding your favorite meals to see them here
      </Text>
      
      <PrimaryButton
        label="Add Your First Meal"
        iconName="add"
        onPress={onAddPress}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    marginTop: 20,
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
    fontWeight: '400',
  },
  button: {
    paddingHorizontal: 28,
  },
});
