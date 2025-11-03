import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const sliceSelector = (state: RootState) => {
  return state.auth;
};

export const authSelector = {
  getErrorMessage: createSelector(sliceSelector, (state) => state.errorMessage),
  getIsLoading: createSelector(sliceSelector, (state) => state.loading),
  isFormLoading: createSelector(
    sliceSelector,
    (state) => state.isFormSubmitted,
  ),
};
