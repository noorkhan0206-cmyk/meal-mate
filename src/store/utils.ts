import {SerializedError} from '@reduxjs/toolkit';

export interface IAsyncState {
  loading: boolean;
  errorCode?: string;
  errorMessage?: string;
  scheduleLoading?: boolean;
  isFormSubmitted?: boolean;
}

/** Function for reducing fulfilled auth thunks. */
export const stateFulfilled = (state: IAsyncState) => {
  state.loading = false;
  stateClearError(state);
};

/** Function for reducing pending auth thunks. */
export const statePending = (state: IAsyncState) => {
  state.loading = true;
};

/** Function for reducing rejected auth thunks. */
export const stateError = (
  state: IAsyncState,
  action: {error: SerializedError},
) => {
  state.loading = false;
  state.isFormSubmitted = false;
  state.errorMessage = action.error.message;
};

export const stateRejectedError = (
  state: IAsyncState,
  action: {error: SerializedError; payload: unknown},
) => {
  state.loading = false;
  state.errorMessage = action.payload as string;
};

/** Function for removing errors from state. */
export const stateClearError = (state: IAsyncState) => {
  delete state.errorCode;
  state.errorMessage = '';
};
