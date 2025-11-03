import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  iconSize?: number;
  backgroundColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  style?: ViewStyle;
}

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subtitle,
  iconName,
  iconColor = '#9B7EBD',
  iconSize = 28,
  backgroundColor = '#FFFFFF',
  titleColor = '#4A3F5C',
  subtitleColor = '#8B7BA8',
  style,
}) => {
  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      {iconName && (
        <View style={styles.titleRow}>
          <Ionicons name={iconName} size={iconSize} color={iconColor} />
          <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
        </View>
      )}
      {!iconName && (
        <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      )}
      {subtitle && (
        <Text style={[styles.subtitle, { color: subtitleColor }]}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  title: {
    fontSize: 38,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: '400',
  },
});
