import AsyncStorage from '@react-native-async-storage/async-storage';
import { ILocalAsyncStorage, LocalAsyncStorageKey } from './type';

export class LocalAsyncStorage implements ILocalAsyncStorage {
  private _setStore = async (key: LocalAsyncStorageKey, data: any) => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error: any) {
      console.log('Error setting AsyncStorage item:', error?.message || error);
    }
  };

  private _readStore = async (key: LocalAsyncStorageKey) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error: any) {
      console.log('Error reading AsyncStorage item:', error?.message || error);
      return null;
    }
  };

  private _removeStore = async (key: LocalAsyncStorageKey) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error: any) {
      console.log('Error removing AsyncStorage item:', error?.message || error);
    }
  };

  /*
  User Data saved start
  **/
  async getRememberedUser(): Promise<any> {
    return await this._readStore(LocalAsyncStorageKey.IS_USER_REMEMBERED);
  }

  async setRememberedUser(data: any) {
    await this._setStore(LocalAsyncStorageKey.IS_USER_REMEMBERED, data);
  }

  async removeRememberedUser() {
    await this._removeStore(LocalAsyncStorageKey.IS_USER_REMEMBERED);
  }
  /*
  User Data saved end
  **/

  async clearStorage() {
    try {
      await AsyncStorage.clear();
    } catch (error: any) {
      console.log('Error clearing AsyncStorage:', error?.message || error);
    }
  }
}
