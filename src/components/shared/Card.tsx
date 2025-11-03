import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  backgroundColor?: string;
  padding?: number;
  borderRadius?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  backgroundColor = '#FFFFFF',
  padding = 22,
  borderRadius = 20,
}) => {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor,
          padding,
          borderRadius,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
});
