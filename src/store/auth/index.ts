import { createReducer } from '@reduxjs/toolkit';
import { IAuthState } from './type';
import { resetAuth, resetAuthErrors, signUp } from './actions';
import { stateClearError, stateError, statePending } from '../utils';

const initialState: IAuthState = {
  loading: false,
  errorMessage: '',
  userData: null,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(resetAuth, () => initialState)
    .addCase(resetAuthErrors, stateClearError)
    // Sign Up example
    .addCase(signUp.pending, statePending)
    .addCase(signUp.rejected, stateError);
});
