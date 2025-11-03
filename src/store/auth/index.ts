import { createReducer } from '@reduxjs/toolkit';
import { IAuthState } from './type';
import {
  resetAuth,
  resetAuthErrors,
  signUp,
  signIn,
  signOutUser,
  resetPassword,
  restoreAuthState,
  setAuthState,
} from './actions';
import { stateClearError, stateError, statePending } from '../utils';

const initialState: IAuthState = {
  loading: false,
  errorMessage: '',
  userData: null,
  isAuthenticated: false,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(resetAuth, () => initialState)
    .addCase(resetAuthErrors, stateClearError)
    .addCase(setAuthState, (state, action) => {
      state.userData = action.payload;
      state.isAuthenticated = !!action.payload;
      state.loading = false;
    })
    .addCase(signUp.pending, statePending)
    .addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;
      state.errorMessage = '';
      state.userData = action.payload;
      state.isAuthenticated = true;
    })
    .addCase(signUp.rejected, stateError)
    .addCase(signIn.pending, statePending)
    .addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      state.errorMessage = '';
      state.userData = action.payload;
      state.isAuthenticated = true;
    })
    .addCase(signIn.rejected, stateError)
    .addCase(signOutUser.pending, statePending)
    .addCase(signOutUser.fulfilled, () => initialState)
    .addCase(signOutUser.rejected, stateError)
    .addCase(restoreAuthState.pending, statePending)
    .addCase(restoreAuthState.fulfilled, (state, action) => {
      state.loading = false;
      state.errorMessage = '';
      state.userData = action.payload;
      state.isAuthenticated = !!action.payload;
    })
    .addCase(restoreAuthState.rejected, (state) => {
      state.loading = false;
      state.isAuthenticated = false;
    })
    .addCase(resetPassword.pending, statePending)
    .addCase(resetPassword.fulfilled, (state) => {
      state.loading = false;
      state.errorMessage = '';
    })
    .addCase(resetPassword.rejected, stateError);
});
