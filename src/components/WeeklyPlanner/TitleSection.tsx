import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TitleSectionProps {
  title: string;
  subtitle: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  backgroundColor: string;
  titleColor: string;
  subtitleColor: string;
}

export const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  subtitle,
  iconName = 'calendar',
  iconColor = '#4A7C7E',
  backgroundColor,
  titleColor,
  subtitleColor,
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Ionicons name={iconName} size={32} color={iconColor} />
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      <Text style={[styles.subtitle, { color: subtitleColor }]}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    marginTop: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: '400',
  },
});
