export interface ILocalAsyncStorage {
  // replace any with specific user types as needed
  getRememberedUser(): Promise<any>;
  setRememberedUser(data: any): Promise<void>;
  removeRememberedUser(): Promise<void>;

  clearStorage(): Promise<void>;
}

export enum LocalAsyncStorageKey {
  IS_USER_REMEMBERED = 'IS_USER_REMEMBERED',
}
