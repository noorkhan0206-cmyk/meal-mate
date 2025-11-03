import { useState, useEffect } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync(); // Prevents splash screen from hiding until fonts are loaded

const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        // 'Nunito-Light': require('@assets/fonts/Nunito-Light.ttf'),
        // 'Nunito-ExtraLight': require('@assets/fonts/Nunito-ExtraLight.ttf'),
        // 'Nunito-Regular': require('@assets/fonts/Nunito-Regular.ttf'),
        // 'Nunito-Medium': require('@assets/fonts/Nunito-Medium.ttf'),
        // 'Nunito-SemiBold': require('@assets/fonts/Nunito-SemiBold.ttf'),
        // 'Nunito-Bold': require('@assets/fonts/Nunito-Bold.ttf'),
      });

      setFontsLoaded(true);
      await SplashScreen.hideAsync(); // Hide the splash screen after fonts load
    };

    loadFonts();
  }, []);

  return fontsLoaded;
};

export default useFonts;
