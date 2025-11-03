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
import { resetPassword } from '@store/auth/actions';
import { authSelector } from '@store/auth/selectors';
import { Colours } from '../theme/colors';

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const { isDark } = useThemeContext();
  const dispatch = useAppDispatch();

  const loading = useAppSelector(authSelector.getIsLoading);

  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const gradientColors: readonly [string, string, ...string[]] = isDark
    ? ['#2A1F3D', '#3D2F52', '#4A3F5C']
    : ['#FDFCFE', '#F9F7FC', '#F5F3F8'];

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    try {
      await dispatch(resetPassword({ email })).unwrap();
      setEmailSent(true);
      Alert.alert(
        'Email Sent',
        'Password reset instructions have been sent to your email.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'),
          },
        ],
      );
    } catch (error: any) {
      Alert.alert('Error', error || 'Failed to send password reset email.');
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
          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={isDark ? '#FFFFFF' : Colours.blackDark}
            />
          </TouchableOpacity>

          {/* Logo */}
          <View style={styles.logoContainer}>
            <View
              style={[
                styles.logoBackground,
                isDark && styles.logoBackgroundDark,
              ]}
            >
              <Ionicons
                name="lock-closed-outline"
                size={40}
                color={Colours.primaryMain}
              />
            </View>
            <Text style={[styles.title, isDark && styles.titleDark]}>
              Reset Password
            </Text>
            <Text style={[styles.subtitle, isDark && styles.subtitleDark]}>
              Enter your email address and we'll send you instructions to reset
              your password
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
                  editable={!emailSent}
                />
              </View>
            </View>

            {/* Reset Button */}
            <TouchableOpacity
              style={[
                styles.resetButton,
                (loading || emailSent) && styles.resetButtonDisabled,
              ]}
              onPress={handleResetPassword}
              disabled={loading || emailSent}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.resetButtonText}>
                  {emailSent ? 'Email Sent' : 'Send Reset Link'}
                </Text>
              )}
            </TouchableOpacity>

            {/* Back to Login */}
            <TouchableOpacity
              style={styles.backToLoginButton}
              onPress={() => navigation.navigate('Login')}
            >
              <Text
                style={[
                  styles.backToLoginText,
                  isDark && styles.backToLoginTextDark,
                ]}
              >
                Back to Login
              </Text>
            </TouchableOpacity>
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
  backButton: {
    position: 'absolute',
    top: 50,
    left: 24,
    zIndex: 10,
    padding: 8,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 40,
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
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  titleDark: {
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 15,
    color: Colours.greyMain,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 22,
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
  resetButton: {
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
  resetButtonDisabled: {
    opacity: 0.6,
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  backToLoginButton: {
    marginTop: 24,
    alignItems: 'center',
  },
  backToLoginText: {
    color: Colours.primaryMain,
    fontSize: 14,
    fontWeight: '700',
  },
  backToLoginTextDark: {
    color: Colours.primarySecondary,
  },
});
