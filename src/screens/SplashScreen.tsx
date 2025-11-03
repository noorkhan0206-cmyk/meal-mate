import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useThemeContext } from '../theme/themeContext';
import MealMateLogo from '../components/MealMateLogo';
import GradientText from '../components/GradientText';

const AppSplashScreen = () => {
  const navigation = useNavigation();
  const { isDark } = useThemeContext();

  // Use different gradient for dark mode
  const gradientColors: readonly [string, string, ...string[]] = isDark
    ? ['#1A2728', '#2F4244', '#3D5A5C']
    : ['#B4C7BE', '#7FA89A', '#4A7C7E'];

  // Persist animation values across renders
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // Animate fade-in and scale
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate to Home after delay
    const timer = setTimeout(() => {
      navigation.navigate('HomeTabs');
    }, 5000);

    // Clean up the timer properly
    return () => clearTimeout(timer);
  }, [navigation, fadeAnim, scaleAnim]);

  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <Animated.View
        style={[
          styles.content,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        {/* Logo Icon */}
        <MealMateLogo size={120} showText={false} />

        {/* App Name with Gradient */}
        <GradientText style={styles.title}>Mealmate.</GradientText>

        <Text style={styles.subtitle}>Plan. Cook. Enjoy. 🍴</Text>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginTop: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 16,
    fontWeight: '500',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
});

export default AppSplashScreen;
