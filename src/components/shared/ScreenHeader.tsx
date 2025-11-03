import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from './IconButton';
import { Ionicons } from '@expo/vector-icons';

interface HeaderAction {
  iconName: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  variant?: 'default' | 'primary' | 'danger';
}

interface ScreenHeaderProps {
  onBackPress?: () => void;
  actions?: HeaderAction[];
  backgroundColor?: string;
  backIconColor?: string;
  showBack?: boolean;
  leftComponent?: React.ReactNode;
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  onBackPress,
  actions = [],
  backgroundColor = '#FFFFFF',
  backIconColor = '#FF5C58',
  showBack = true,
  leftComponent,
}) => {
  return (
    <View style={[styles.header, { backgroundColor }]}>
      {/* Left Side - Back Button or Custom Component */}
      {leftComponent ? (
        leftComponent
      ) : showBack && onBackPress ? (
        <IconButton
          iconName="arrow-back"
          onPress={onBackPress}
          color={backIconColor}
        />
      ) : (
        <View style={styles.placeholder} />
      )}

      {/* Right Side - Action Icons */}
      <View style={styles.actions}>
        {actions.map((action, index) => (
          <IconButton
            key={index}
            iconName={action.iconName}
            onPress={action.onPress}
            variant={action.variant}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 16,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  placeholder: {
    width: 44,
    height: 44,
  },
});
