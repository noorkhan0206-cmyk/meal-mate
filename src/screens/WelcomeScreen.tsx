import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useThemeContext } from '../theme/themeContext';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const { isDark } = useThemeContext();
  
  // Use different gradient for dark mode
  const gradientColors: readonly [string, string, ...string[]] = isDark 
    ? ['#1A1A2E', '#16213E', '#0F3460']
    : ['#E7F6F2', '#F8C8DC', '#FFFFFF'];

  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

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
        your week, and never wonder {'\n'}"what’s for dinner?" again.
      </Text>

      {/* Button */}
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('WeeklyPlanner')}
      >
        <Text
          style={styles.startButtonText}
          // onPress={() => navigation.navigate('WeeklyPlanner')}
        >
          Start Planning
        </Text>
      </TouchableOpacity>

      {/* Bottom Features */}
      <View style={styles.featuresContainer}>
        <View style={styles.featureCard}>
          <Ionicons name="calendar-outline" size={28} color="#5DADE2" />
          <Text style={styles.featureTitle}>Weekly Planner</Text>
          <Text style={styles.featureDesc}>
            Organize meals for the entire week with an intuitive calendar view.
          </Text>
        </View>

        <View style={styles.featureCard}>
          <MaterialCommunityIcons
            name="silverware-fork-knife"
            size={28}
            color="#48C9B0"
          />
          <Text style={styles.featureTitle}>Recipe Collection</Text>
          <Text style={styles.featureDesc}>
            Save your favorite meals with ingredients and beautiful photos.
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Ionicons name="heart" size={28} color="#FFB6C1" />
          <Text style={styles.featureTitle}>Favorites</Text>
          <Text style={styles.featureDesc}>
            Quick access to your most loved recipes for easy planning.
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

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
    backgroundColor: '#5DADE2',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 28,
    marginBottom: 50,
    shadowColor: '#5DADE2',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 17,
    letterSpacing: 0.5,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    flexWrap: 'wrap',
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    width: '30%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  featureTitle: {
    color: '#2C3E50',
    fontWeight: '700',
    fontSize: 13,
    marginTop: 10,
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  featureDesc: {
    color: '#7F8C8D',
    fontSize: 11,
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 16,
  },
});
