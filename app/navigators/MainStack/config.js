/*
 * app/navigators/MainStack/config.js
 * Config file for MainStack.
 */

import { createStackNavigator } from 'react-navigation';

import MainTabs from 'app/navigators/MainTabs';
import Detail from 'app/screens/Detail';

// configure the screens that will be accessible in this router
const routeConfiguration = {
  MainTabs: {
    screen: MainTabs
  },
  Detail: {
    screen: Detail
  }
};

// set title of initial screen
export const InitialScreen = 'MainTabs';

// navigator config (docs on react-navigation website.)
const navigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: InitialScreen
};

// export the StackNavigator object
export const MainStack = createStackNavigator(routeConfiguration, navigatorConfiguration);
