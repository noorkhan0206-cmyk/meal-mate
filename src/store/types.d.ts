import { IAuthState } from './auth/type';

/** Defines what is provided in the `extra` argument available in Redux thunks in this app. */
export interface IAppReduxExtra {}

/** Defines the app's complete Redux state. */
export interface IAppState {
  auth: IAuthState;
}

/** Redux store configuration used when creating async thunks. */
export type StoreConfig = {
  state: IAppState;
  extra: IAppReduxExtra;
};
