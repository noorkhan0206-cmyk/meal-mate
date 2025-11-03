import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Reset authentication state.
 */
export const resetAuth = createAction('auth/resetAuth');

/**
 * Reset authentication state errors.
 */
export const resetAuthErrors = createAction('auth/resetAuthErrors');

export const signUp = createAsyncThunk<void>('auth/signUp', async () => {});

export const signIn = createAsyncThunk<void>('auth/signUp', async () => {});
