import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SettingItemProps {
  title: string;
  description?: string;
  iconName: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  titleColor?: string;
  descriptionColor?: string;
}

export const SettingItem: React.FC<SettingItemProps> = ({
  title,
  description,
  iconName,
  iconColor = '#666',
  value,
  onValueChange,
  titleColor = '#2C3E50',
  descriptionColor = '#7F8C8D',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Ionicons name={iconName} size={24} color={iconColor} />
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
          {description && (
            <Text style={[styles.description, { color: descriptionColor }]}>
              {description}
            </Text>
          )}
        </View>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#C8E6D5', true: '#A8E6CF' }}
        thumbColor={value ? '#48C9B0' : '#FFFFFF'}
        ios_backgroundColor="#C8E6D5"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
    letterSpacing: 0.2,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },
});
