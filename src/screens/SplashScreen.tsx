import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useThemeContext } from '../theme/themeContext';
import { useAppDispatch } from '@store';
import { restoreAuthState } from '@store/auth/actions';
import MealMateLogo from '../components/MealMateLogo';
import GradientText from '../components/GradientText';
import { Colours } from '../theme/colors';

const AppSplashScreen = () => {
  const navigation = useNavigation();
  const { isDark } = useThemeContext();
  const dispatch = useAppDispatch();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // Use different gradient for dark mode
  const gradientColors: readonly [string, string, ...string[]] = isDark
    ? ['#2A1F3D', '#3D2F52', '#4A3F5C']
    : ['#FDFCFE', '#F9F7FC', '#F5F3F8'];

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

    // Check auth state and navigate
    const checkAuthAndNavigate = async () => {
      try {
        // Restore auth state from Firebase
        await dispatch(restoreAuthState()).unwrap();

        // Wait for animation to complete
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Navigate to WelcomeScreen (which will show appropriate buttons)
        navigation.navigate('HomeTabs');
      } catch (error) {
        // If auth check fails, still navigate after animation
        await new Promise((resolve) => setTimeout(resolve, 2000));
        navigation.navigate('HomeTabs');
      } finally {
        setIsCheckingAuth(false);
      }
    };

    checkAuthAndNavigate();
  }, [navigation, fadeAnim, scaleAnim, dispatch]);

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

        <Text style={[styles.subtitle, isDark && styles.subtitleDark]}>
          Plan. Cook. Enjoy. 🍴
        </Text>

        {isCheckingAuth && (
          <ActivityIndicator
            size="small"
            color={isDark ? Colours.primarySecondary : Colours.primaryMain}
            style={styles.loader}
          />
        )}
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
    color: Colours.greyMain,
    marginTop: 16,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  subtitleDark: {
    color: Colours.greyMedium,
  },
  loader: {
    marginTop: 24,
  },
});

export default AppSplashScreen;
