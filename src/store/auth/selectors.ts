import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const sliceSelector = (state: RootState) => {
  return state.auth;
};

export const authSelector = {
  getErrorMessage: createSelector(sliceSelector, (state) => state.errorMessage),
  getIsLoading: createSelector(sliceSelector, (state) => state.loading),
  getUserData: createSelector(sliceSelector, (state) => state.userData),
  getIsAuthenticated: createSelector(
    sliceSelector,
    (state) => state.isAuthenticated,
  ),
  getUser: createSelector(sliceSelector, (state) => state.userData),
};
