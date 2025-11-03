import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IconButtonProps {
  iconName: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  size?: number;
  color?: string;
  backgroundColor?: string;
  style?: ViewStyle;
  variant?: 'default' | 'primary' | 'danger';
}

export const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  onPress,
  size = 24,
  color,
  backgroundColor,
  style,
  variant = 'default',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: backgroundColor || '#9B7EBD',
          color: color || '#FFFFFF',
        };
      case 'danger':
        return {
          backgroundColor: backgroundColor || '#D47B9E',
          color: color || '#FFFFFF',
        };
      default:
        return {
          backgroundColor: backgroundColor || '#FFFFFF',
          color: color || '#666',
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: variantStyles.backgroundColor },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons name={iconName} size={size} color={variantStyles.color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
});
