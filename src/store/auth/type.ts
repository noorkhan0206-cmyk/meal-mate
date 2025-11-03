import { IAsyncState } from '../utils';

export interface IUser {
  uid: string;
  email: string;
  displayName: string | null;
}

export interface IAuthState extends IAsyncState {
  userData: IUser | null;
  isAuthenticated: boolean;
}
