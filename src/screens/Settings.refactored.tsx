import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Alert } from 'react-native';
import {
  ScreenHeader,
  PageTitle,
  Card,
  SettingItem,
  InfoRow,
  Divider,
  PrimaryButton,
} from '../components/shared';
import { useScreenNavigation } from '../hooks/useScreenNavigation';
import { useCommonStyles } from '../hooks/useCommonStyles';
import { useThemeContext } from '../theme/themeContext';

const Settings: React.FC = () => {
  const { goBack, navigateToWeeklyPlanner, navigateToFavorites, navigateToAddMeal } =
    useScreenNavigation();
  const { isDark, colors } = useCommonStyles();
  const { toggleTheme } = useThemeContext();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleSaveSettings = () => {
    Alert.alert(
      'Settings Saved',
      'Your preferences have been saved successfully!',
      [{ text: 'OK' }]
    );
  };

  const headerActions = [
    { iconName: 'calendar-outline' as const, onPress: navigateToWeeklyPlanner },
    { iconName: 'heart-outline' as const, onPress: navigateToFavorites },
    { iconName: 'add' as const, onPress: navigateToAddMeal },
    { iconName: 'settings' as const, onPress: () => {}, variant: 'primary' as const },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      {/* Header */}
      <ScreenHeader
        onBackPress={goBack}
        actions={headerActions}
        backgroundColor={colors.card}
        backIconColor="#FF5C58"
      />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Title */}
        <PageTitle
          title="Settings"
          subtitle="Customize your MealMate experience"
          iconName="settings-outline"
          backgroundColor={colors.card}
          titleColor={colors.text}
          subtitleColor={colors.textSecondary}
        />

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Preferences
          </Text>

          <Card backgroundColor={colors.card}>
            <SettingItem
              title="Notifications"
              description="Get reminders about your meal plans"
              iconName="notifications-outline"
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              titleColor={colors.text}
              descriptionColor={colors.textSecondary}
            />

            <Divider color={colors.border} />

            <SettingItem
              title="Dark Mode"
              description="Toggle dark theme"
              iconName="moon-outline"
              value={isDark}
              onValueChange={toggleTheme}
              titleColor={colors.text}
              descriptionColor={colors.textSecondary}
            />
          </Card>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>About</Text>

          <Card backgroundColor={colors.card}>
            <InfoRow
              label="Version:"
              value="1.0.0"
              labelColor={colors.text}
              valueColor={colors.textSecondary}
            />
            <InfoRow
              label="Developer:"
              value="MealMate Team"
              labelColor={colors.text}
              valueColor={colors.textSecondary}
            />

            <View style={styles.descriptionContainer}>
              <Text style={[styles.descriptionText, { color: colors.textSecondary }]}>
                A simple meal planner to help you organize your weekly meals and
                save your favorite recipes.
              </Text>
            </View>
          </Card>
        </View>

        {/* Save Button */}
        <PrimaryButton
          label="Save Settings"
          onPress={handleSaveSettings}
          style={styles.saveButton}
        />

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 14,
    letterSpacing: 0.2,
  },
  descriptionContainer: {
    marginTop: 8,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
  },
  saveButton: {
    marginHorizontal: 20,
    marginTop: 32,
  },
  bottomSpacing: {
    height: 40,
  },
});

export default Settings;
