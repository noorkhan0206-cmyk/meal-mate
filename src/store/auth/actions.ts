import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../../../firebase.config';
import { IUser } from './type';

/**
 * Reset authentication state.
 */
export const resetAuth = createAction('auth/resetAuth');

/**
 * Reset authentication state errors.
 */
export const resetAuthErrors = createAction('auth/resetAuthErrors');

/**
 * Set auth state (used for auth listener)
 */
export const setAuthState = createAction<IUser | null>('auth/setAuthState');

/**
 * Sign up with email, password, and display name
 */
export const signUp = createAsyncThunk<
  IUser,
  { email: string; password: string; displayName: string }
>(
  'auth/signUp',
  async ({ email, password, displayName }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await updateProfile(userCredential.user, {
        displayName,
      });

      const user = {
        uid: userCredential.user.uid,
        email: userCredential.user.email!,
        displayName,
      };

      await AsyncStorage.setItem('userToken', userCredential.user.uid);
      return user;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

/**
 * Sign in with email and password
 */
export const signIn = createAsyncThunk<
  IUser,
  { email: string; password: string }
>('auth/signIn', async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = {
      uid: userCredential.user.uid,
      email: userCredential.user.email!,
      displayName: userCredential.user.displayName,
    };

    await AsyncStorage.setItem('userToken', userCredential.user.uid);
    return user;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

/**
 * Sign out the current user
 */
export const signOutUser = createAsyncThunk<void>(
  'auth/signOut',
  async (_, { rejectWithValue }) => {
    try {
      await firebaseSignOut(auth);
      await AsyncStorage.removeItem('userToken');
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

/**
 * Send password reset email
 */
export const resetPassword = createAsyncThunk<void, { email: string }>(
  'auth/resetPassword',
  async ({ email }, { rejectWithValue }) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

/**
 * Restore auth state from Firebase
 */
export const restoreAuthState = createAsyncThunk<IUser | null>(
  'auth/restoreAuthState',
  async (_, { rejectWithValue }) => {
    try {
      return new Promise<IUser | null>((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          unsubscribe();
          if (user) {
            resolve({
              uid: user.uid,
              email: user.email!,
              displayName: user.displayName,
            });
          } else {
            resolve(null);
          }
        });
      });
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
