import 'react-native-reanimated';
import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import { store } from '@store';
import useFonts from './hooks/useFonts';
import { Navigation } from './navigation';
import ThemeProvider from './theme/themeContext';
import AppSplashScreen from '@screens/SplashScreen';
import { Text } from 'react-native';
import { WithSplashScreen } from './WithSplashScreen';

SplashScreen.preventAutoHideAsync();

export function App() {
  const [isAppReady, setIsAppReady] = React.useState(false);
  const fontsLoaded = useFonts();

  React.useEffect(() => {
    async function prepareApp() {
      try {
        await SplashScreen.preventAutoHideAsync(); // Prevent splash from hiding
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
          setIsAppReady(true);
        }
      } catch (error) {
        console.warn(error);
      }
    }

    prepareApp();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider style={appStyles}>
        <GestureHandlerRootView style={appStyles}>
          <ThemeProvider>
            <Navigation
              linking={{
                enabled: 'auto',
                prefixes: [
                  // Change the scheme to match your app's scheme defined in app.json
                  'helloworld://',
                ],
              }}
              onReady={() => {
                SplashScreen.hideAsync();
              }}
            />
          </ThemeProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  );
}

const appStyles = {
  flex: 1,
  backgroundColor: '#F8F9F9',
};
