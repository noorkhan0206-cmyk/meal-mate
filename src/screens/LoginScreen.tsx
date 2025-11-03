import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useThemeContext } from '../theme/themeContext';
import { useAppDispatch, useAppSelector } from '@store';
import { signIn } from '@store/auth/actions';
import { authSelector } from '@store/auth/selectors';
import { Colours } from '../theme/colors';

export default function LoginScreen() {
  const navigation = useNavigation();
  const { isDark } = useThemeContext();
  const dispatch = useAppDispatch();

  const loading = useAppSelector(authSelector.getIsLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const gradientColors: readonly [string, string, ...string[]] = isDark
    ? ['#2A1F3D', '#3D2F52', '#4A3F5C']
    : ['#FDFCFE', '#F9F7FC', '#F5F3F8'];

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      await dispatch(signIn({ email, password })).unwrap();
      navigation.navigate('WeeklyPlanner');
    } catch (error: any) {
      Alert.alert(
        'Login Failed',
        error || 'Failed to sign in. Please check your credentials.',
      );
    }
  };

  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo */}
          <View style={styles.logoContainer}>
            <View
              style={[
                styles.logoBackground,
                isDark && styles.logoBackgroundDark,
              ]}
            >
              <Ionicons
                name="restaurant-outline"
                size={40}
                color={Colours.primaryMain}
              />
            </View>
            <Text style={[styles.title, isDark && styles.titleDark]}>
              Welcome Back
            </Text>
            <Text style={[styles.subtitle, isDark && styles.subtitleDark]}>
              Sign in to continue planning your meals
            </Text>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            {/* Email Input */}
            <View style={styles.inputContainer}>
              <View
                style={[styles.inputWrapper, isDark && styles.inputWrapperDark]}
              >
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={Colours.greyMain}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={[styles.input, isDark && styles.inputDark]}
                  placeholder="Email"
                  placeholderTextColor={Colours.greyMedium}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                />
              </View>
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <View
                style={[styles.inputWrapper, isDark && styles.inputWrapperDark]}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={Colours.greyMain}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={[styles.input, isDark && styles.inputDark]}
                  placeholder="Password"
                  placeholderTextColor={Colours.greyMedium}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoComplete="password"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                >
                  <Ionicons
                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                    size={20}
                    color={Colours.greyMain}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity
              style={styles.forgotPasswordContainer}
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              <Text
                style={[
                  styles.forgotPasswordText,
                  isDark && styles.forgotPasswordTextDark,
                ]}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity
              style={[
                styles.loginButton,
                loading && styles.loginButtonDisabled,
              ]}
              onPress={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.loginButtonText}>Sign In</Text>
              )}
            </TouchableOpacity>

            {/* Sign Up Link */}
            <View style={styles.signupContainer}>
              <Text
                style={[styles.signupText, isDark && styles.signupTextDark]}
              >
                Don't have an account?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signupLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoBackground: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 30,
    shadowColor: Colours.primaryMain,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
    marginBottom: 20,
  },
  logoBackgroundDark: {
    backgroundColor: '#3D2F52',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: Colours.blackDark,
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  titleDark: {
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    color: Colours.greyMain,
    textAlign: 'center',
  },
  subtitleDark: {
    color: Colours.greyMedium,
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  inputWrapperDark: {
    backgroundColor: '#3D2F52',
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 16,
    color: Colours.blackDark,
  },
  inputDark: {
    color: '#FFFFFF',
  },
  eyeIcon: {
    padding: 8,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  forgotPasswordText: {
    color: Colours.primaryMain,
    fontSize: 14,
    fontWeight: '600',
  },
  forgotPasswordTextDark: {
    color: Colours.primarySecondary,
  },
  loginButton: {
    backgroundColor: Colours.primaryMain,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: Colours.primaryMain,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  loginButtonDisabled: {
    opacity: 0.6,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  signupText: {
    color: Colours.greyMain,
    fontSize: 14,
  },
  signupTextDark: {
    color: Colours.greyMedium,
  },
  signupLink: {
    color: Colours.primaryMain,
    fontSize: 14,
    fontWeight: '700',
  },
});
