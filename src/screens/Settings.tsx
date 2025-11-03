import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Switch,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useThemeContext } from '../theme/themeContext';

export default function Settings() {
  const navigation = useNavigation();
  const { isDark, toggleTheme, theme } = useThemeContext();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  
  // Dynamic styles based on theme
  const dynamicStyles = {
    container: {
      ...styles.container,
      backgroundColor: isDark ? theme.colors.background : '#FFF5F7',
    },
    header: {
      ...styles.header,
      backgroundColor: isDark ? theme.colors.card : '#FFFFFF',
    },
    titleSection: {
      ...styles.titleSection,
      backgroundColor: isDark ? theme.colors.card : '#FFFFFF',
    },
    mainTitle: {
      ...styles.mainTitle,
      color: isDark ? theme.colors.textBlack : '#2C3E50',
    },
    subtitle: {
      ...styles.subtitle,
      color: isDark ? theme.colors.textLabelSecondary : '#7F8C8D',
    },
    card: {
      ...styles.card,
      backgroundColor: isDark ? theme.colors.card : '#FFFFFF',
    },
    sectionTitle: {
      ...styles.sectionTitle,
      color: isDark ? theme.colors.textBlack : '#2C3E50',
    },
    settingTitle: {
      ...styles.settingTitle,
      color: isDark ? theme.colors.textBlack : '#2C3E50',
    },
    settingDescription: {
      ...styles.settingDescription,
      color: isDark ? theme.colors.textLabelSecondary : '#7F8C8D',
    },
    infoLabel: {
      ...styles.infoLabel,
      color: isDark ? theme.colors.textBlack : '#2C3E50',
    },
    infoValue: {
      ...styles.infoValue,
      color: isDark ? theme.colors.textLabelSecondary : '#7F8C8D',
    },
    descriptionText: {
      ...styles.descriptionText,
      color: isDark ? theme.colors.textLabelSecondary : '#7F8C8D',
    },
  };

  // Handle calendar icon press
  const handleCalendarPress = () => {
    navigation.navigate('WeeklyPlanner');
  };

  // Handle favorite icon press
  const handleFavoritePress = () => {
    navigation.navigate('Favorites');
  };

  // Handle add icon press
  const handleAddPress = () => {
    navigation.navigate('AddNewMeal');
  };

  // Handle save settings
  const handleSaveSettings = () => {
    Alert.alert(
      'Settings Saved',
      'Your preferences have been saved successfully!',
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={dynamicStyles.container}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      {/* Header */}
      <View style={dynamicStyles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#FF5C58" />
        </TouchableOpacity>

        <View style={styles.headerIcons}>
          <TouchableOpacity
            style={styles.headerIcon}
            onPress={handleCalendarPress}
          >
            <Ionicons name="calendar-outline" size={24} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.headerIcon}
            onPress={handleFavoritePress}
          >
            <Ionicons name="heart-outline" size={24} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.headerIcon}
            onPress={handleAddPress}
          >
            <Ionicons name="add" size={24} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.headerIcon, styles.settingsButton]}
          >
            <Ionicons name="settings" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Section */}
        <View style={dynamicStyles.titleSection}>
          <View style={styles.titleRow}>
            <Ionicons name="settings-outline" size={28} color="#5DADE2" />
            <Text style={dynamicStyles.mainTitle}>Settings</Text>
          </View>
          <Text style={dynamicStyles.subtitle}>Customize your MealMate experience</Text>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={dynamicStyles.sectionTitle}>Preferences</Text>

          <View style={dynamicStyles.card}>
            {/* Notifications Setting */}
            <View style={styles.settingItem}>
              <View style={styles.settingLeft}>
                <Ionicons name="notifications-outline" size={24} color="#666" />
                <View style={styles.settingText}>
                  <Text style={dynamicStyles.settingTitle}>Notifications</Text>
                  <Text style={dynamicStyles.settingDescription}>
                    Get reminders about your meal plans
                  </Text>
                </View>
              </View>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: '#C8E6D5', true: '#A8E6CF' }}
                thumbColor={notificationsEnabled ? '#48C9B0' : '#FFFFFF'}
                ios_backgroundColor="#C8E6D5"
              />
            </View>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Dark Mode Setting */}
            <View style={styles.settingItem}>
              <View style={styles.settingLeft}>
                <Ionicons name="moon-outline" size={24} color="#666" />
                <View style={styles.settingText}>
                  <Text style={dynamicStyles.settingTitle}>Dark Mode</Text>
                  <Text style={dynamicStyles.settingDescription}>
                    Toggle dark theme
                  </Text>
                </View>
              </View>
              <Switch
                value={isDark}
                onValueChange={toggleTheme}
                trackColor={{ false: '#C8E6D5', true: '#A8E6CF' }}
                thumbColor={isDark ? '#48C9B0' : '#FFFFFF'}
                ios_backgroundColor="#C8E6D5"
              />
            </View>
          </View>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={dynamicStyles.sectionTitle}>About</Text>

          <View style={dynamicStyles.card}>
            {/* Version */}
            <View style={styles.infoItem}>
              <Text style={dynamicStyles.infoLabel}>Version:</Text>
              <Text style={dynamicStyles.infoValue}>1.0.0</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={dynamicStyles.infoLabel}>Developer:</Text>
              <Text style={dynamicStyles.infoValue}>MealMate Team</Text>
            </View>

            {/* Description */}
            <View style={styles.descriptionContainer}>
              <Text style={dynamicStyles.descriptionText}>
                A simple meal planner to help you organize your weekly meals and save your favorite recipes.
              </Text>
            </View>
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSaveSettings}
          activeOpacity={0.8}
        >
          <Text style={styles.saveButtonText}>Save Settings</Text>
        </TouchableOpacity>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
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
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  headerIcon: {
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
  settingsButton: {
    backgroundColor: '#48C9B0',
  },
  scrollView: {
    flex: 1,
  },
  titleSection: {
    backgroundColor: '#FFFFFF',
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
  mainTitle: {
    fontSize: 38,
    fontWeight: '800',
    color: '#2C3E50',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#7F8C8D',
    marginTop: 4,
    fontWeight: '400',
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 14,
    letterSpacing: 0.2,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 16,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 4,
    letterSpacing: 0.2,
  },
  settingDescription: {
    fontSize: 14,
    color: '#7F8C8D',
    lineHeight: 20,
    fontWeight: '400',
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 16,
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    width: 80,
    letterSpacing: 0.2,
  },
  infoValue: {
    fontSize: 16,
    color: '#7F8C8D',
    flex: 1,
    fontWeight: '400',
  },
  descriptionContainer: {
    marginTop: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#7F8C8D',
    lineHeight: 22,
    fontWeight: '400',
  },
  saveButton: {
    backgroundColor: '#5DADE2',
    marginHorizontal: 20,
    marginTop: 32,
    paddingVertical: 18,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#5DADE2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  bottomSpacing: {
    height: 40,
  },
});
