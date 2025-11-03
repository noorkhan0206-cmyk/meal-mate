import { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_KEY = '@mealmate_theme';

const useGetTheme = () => {
  const [rememberedTheme, setRememberedTheme] = useState({ theme: 'light' });
  const scheme = useColorScheme();

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem(THEME_KEY);
      if (savedTheme !== null) {
        setRememberedTheme({ theme: savedTheme });
      }
    } catch (error) {
      console.log('Error loading theme:', error);
    }
  };

  const saveTheme = async (theme: string) => {
    try {
      await AsyncStorage.setItem(THEME_KEY, theme);
      setRememberedTheme({ theme });
    } catch (error) {
      console.log('Error saving theme:', error);
    }
  };

  return { rememberedTheme, saveTheme };
};

export default useGetTheme;
