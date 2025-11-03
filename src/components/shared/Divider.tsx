import React from 'react';
import { View, StyleSheet } from 'react-native';

interface DividerProps {
  color?: string;
  height?: number;
  marginVertical?: number;
}

export const Divider: React.FC<DividerProps> = ({
  color = '#f0f0f0',
  height = 1,
  marginVertical = 16,
}) => {
  return (
    <View
      style={[
        styles.divider,
        {
          backgroundColor: color,
          height,
          marginVertical,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {},
});
