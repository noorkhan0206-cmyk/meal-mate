import { IconSymbol } from '@components/ui/IconSymbol';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeeklyPlannerScreen from '../screens/WeeklyPlannerScreen';
// import { Home } from '../screens/Home';
import SplashScreen from '@screens/SplashScreen';
import WelcomeScreen from '@screens/WelcomeScreen';
import AddNewMeal from '@screens/AddNewMeal';
import FavoriteScreen from '@screens/FavoriteScreen';
import Settings from '@screens/Settings';
import { Home } from 'lucide-react-native';
import { NotFound } from '../screens/NotFound';

// import { HapticTab } from "@/components/HapticTab";
// import { IconSymbol } from "@/components/ui/IconSymbol";
// import TabBarBackground from "@/components/ui/TabBarBackground";

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <IconSymbol size={28} name="house.fill" color={color} />
          // your tab icon component
        ),
      },
    },
  },
  screenOptions: {
    headerShown: false,
    // tabBarButton: HapticTab,
    // tabBarBackground: TabBarBackground,
    // tabBarStyle: Platform.select({
    //   ios: {
    //     // Use a transparent background on iOS to show the blur effect
    //     possition: "absolute",
    //   },
    //   default: {},
    // }),
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    Welcome: {
      screen: SplashScreen,
      options: {
        headerShown: false,
      },
    },
    HomeTabs: {
      screen: WelcomeScreen,
      options: {
        headerShown: false,
      },
    },
    WeeklyPlanner: {
      screen: WeeklyPlannerScreen,
      options: {
        headerShown: false,
      },
    },
    AddNewMeal: {
      screen: AddNewMeal,
      options: {
        headerShown: false,
      },
    },
    Favorites: {
      screen: FavoriteScreen,
      options: {
        headerShown: false,
      },
    },
    Settings: {
      screen: Settings,
      options: {
        headerShown: false,
      },
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
