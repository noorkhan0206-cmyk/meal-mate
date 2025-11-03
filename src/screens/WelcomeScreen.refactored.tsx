import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton, FeatureCard } from '../components/shared';
import { useScreenNavigation } from '../hooks/useScreenNavigation';
import { useCommonStyles } from '../hooks/useCommonStyles';

const WelcomeScreen: React.FC = () => {
  const { navigateToWeeklyPlanner } = useScreenNavigation();
  const { isDark } = useCommonStyles();

  const gradientColors: readonly [string, string, ...string[]] = isDark
    ? ['#1A1A2E', '#16213E', '#0F3460']
    : ['#E7F6F2', '#F8C8DC', '#FFFFFF'];

  const features = [
    {
      iconName: 'calendar-outline',
      iconColor: '#5DADE2',
      title: 'Weekly Planner',
      description: 'Organize meals for the entire week with an intuitive calendar view.',
    },
    {
      iconName: 'silverware-fork-knife',
      iconColor: '#48C9B0',
      title: 'Recipe Collection',
      description: 'Save your favorite meals with ingredients and beautiful photos.',
      iconLibrary: 'MaterialCommunityIcons' as const,
    },
    {
      iconName: 'heart',
      iconColor: '#FFB6C1',
      title: 'Favorites',
      description: 'Quick access to your most loved recipes for easy planning.',
    },
  ];

  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      {/* Logo */}
      <View style={styles.iconContainer}>
        <View style={styles.iconBackground}>
          <Ionicons name="restaurant-outline" size={36} color="#5DADE2" />
        </View>
      </View>

      {/* Title & Description */}
      <Text style={styles.title}>MealMate</Text>
      <Text style={styles.subtitle}>
        Your simple companion for weekly meal planning. Save recipes, organize
        your week, and never wonder {'\n'}"what's for dinner?" again.
      </Text>

      {/* Start Button */}
      <PrimaryButton
        label="Start Planning"
        onPress={navigateToWeeklyPlanner}
        style={styles.startButton}
      />

      {/* Features */}
      <View style={styles.featuresContainer}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            iconName={feature.iconName}
            iconColor={feature.iconColor}
            iconLibrary={feature.iconLibrary}
          />
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
  iconBackground: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 30,
    shadowColor: '#5DADE2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  title: {
    fontSize: 48,
    fontWeight: '800',
    color: '#2C3E50',
    textAlign: 'center',
    letterSpacing: -1,
  },
  subtitle: {
    color: '#7F8C8D',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 40,
    lineHeight: 26,
    fontWeight: '400',
    paddingHorizontal: 10,
  },
  startButton: {
    marginBottom: 50,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    flexWrap: 'wrap',
  },
});

export default WelcomeScreen;
