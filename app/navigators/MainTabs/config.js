/*
 * app/navigators/MainTabs/config.js
 * Config file for MainTabs.
 */

import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from 'app/screens/Home';
import Tab2 from 'app/screens/Tab2';

// configure the screens that will be accessible in this router
const routeConfiguration = {
  Home: {
    screen: HomeScreen
  },
  Tab2: {
    screen: Tab2
  }
};

// set the initial screen
export const InitialScreen = 'Home';

// navigator config (docs on react-navigation website.)
const navigatorConfiguration = {
  lazy: true,
  backBehavior: 'none',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarPosition: 'bottom',
  initialRouteName: InitialScreen
};

// export the TabNavigator object
export const MainTabs = createBottomTabNavigator(routeConfiguration, navigatorConfiguration);
