import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FavoriteMealCardProps {
  id: string;
  name: string;
  image: string;
  isFavorite: boolean;
  onPress: () => void;
  onFavoritePress: () => void;
  backgroundColor?: string;
  textColor?: string;
}

export const FavoriteMealCard: React.FC<FavoriteMealCardProps> = ({
  name,
  image,
  isFavorite,
  onPress,
  onFavoritePress,
  backgroundColor = '#FFFFFF',
  textColor = '#2C3E50',
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Meal Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Favorite Heart Icon */}
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={onFavoritePress}
          activeOpacity={0.7}
        >
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={24}
            color="#FF5C58"
          />
        </TouchableOpacity>
      </View>

      {/* Meal Name */}
      <View style={styles.info}>
        <Text style={[styles.name, { color: textColor }]} numberOfLines={2}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
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
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F7F7F7',
  },
  favoriteButton: {
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
  info: {
    padding: 18,
  },
  name: {
    fontSize: 19,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});
