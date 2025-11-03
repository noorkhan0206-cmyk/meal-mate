import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  onLogoPress: () => void;
  onCalendarPress: () => void;
  onFavoritesPress: () => void;
  onAddPress: () => void;
  onSettingsPress: () => void;
  isDark: boolean;
  backgroundColor: string;
}

export const Header: React.FC<HeaderProps> = ({
  onLogoPress,
  onCalendarPress,
  onFavoritesPress,
  onAddPress,
  onSettingsPress,
  isDark,
  backgroundColor,
}) => {
  return (
    <View style={[styles.header, { backgroundColor }]}>
      {/* Logo Button */}
      <TouchableOpacity style={styles.logoButton} onPress={onLogoPress}>
        <Ionicons name="restaurant" size={28} color="#5DADE2" />
      </TouchableOpacity>

      {/* Action Icons */}
      <View style={styles.headerIcons}>
        <HeaderIconButton
          iconName="calendar-outline"
          onPress={onCalendarPress}
        />
        <HeaderIconButton iconName="heart-outline" onPress={onFavoritesPress} />
        <HeaderIconButton iconName="add" onPress={onAddPress} />
        <HeaderIconButton
          iconName="settings-outline"
          onPress={onSettingsPress}
        />
      </View>
    </View>
  );
};

interface HeaderIconButtonProps {
  iconName: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}

const HeaderIconButton: React.FC<HeaderIconButtonProps> = ({
  iconName,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.iconButton} onPress={onPress}>
      <Ionicons name={iconName} size={24} color="#666" />
    </TouchableOpacity>
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
  logoButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF5E6',
    shadowColor: '#5DADE2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
});
