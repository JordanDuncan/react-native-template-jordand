/*
 * app/navigators/MainStack/config.js
 * Config file for MainStack.
 */

import { StackNavigator } from 'react-navigation';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

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

// navigator config (docs on react-navigation website.)
const navigatorConfiguration = {
  headerMode: 'none'
};

// set title of initial screen
export const InitialScreen = 'MainTabs';

// export function that binds listener
export function addReduxListener() {
  return createReduxBoundAddListener('MainStack');
}

// export the StackNavigator object
export const MainStack = StackNavigator(routeConfiguration, navigatorConfiguration);
