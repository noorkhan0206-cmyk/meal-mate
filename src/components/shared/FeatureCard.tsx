import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

interface FeatureCardProps {
  title: string;
  description: string;
  iconName: string;
  iconColor?: string;
  iconLibrary?: 'Ionicons' | 'MaterialCommunityIcons';
  backgroundColor?: string;
  width?: string | number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  iconName,
  iconColor = '#9B7EBD',
  iconLibrary = 'Ionicons',
  backgroundColor = '#FFFFFF',
  width = '30%',
}) => {
  const IconComponent = iconLibrary === 'Ionicons' ? Ionicons : MaterialCommunityIcons;

  return (
    <View style={[styles.card, { backgroundColor, width }]}>
      <IconComponent name={iconName as any} size={28} color={iconColor} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    color: '#4A3F5C',
    fontWeight: '700',
    fontSize: 13,
    marginTop: 10,
    marginBottom: 6,
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  description: {
    color: '#8B7BA8',
    fontSize: 11,
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 16,
  },
});
