/*
 * app/config/store.js
 * ---
 * Configures your redux store.
 * Adds redux-thunk as middleware, as well as registering your reducers from app/redux
 */

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

// /**
//  * Import middlewares from navigators (react-navigation)
//  */

/*
 * Combine reducers
 */
import TestData from 'app/redux/TestData';
import MainStack from 'app/redux/MainStack';
import MainTabs from 'app/redux/MainTabs';

const reducer = combineReducers({
  TestData,
  MainStack,
  MainTabs
  // add your reducers here
});

/*
 * Configure and create the redux store
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// gets the current screen from navigation state
function getCurrentRouteName (navigationState: {}): string {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

/**
 *
 * An example of redux middleware.
 * This will catch any changes in state to do with navigation
 */
const screenTracking = ({ getState }) => next => action => {
  if (action.type.indexOf('Navigation/') !== 0) {
    return next(action);
  }

  let thisState = getState();

  const currentScreen = {
    MainStack: getCurrentRouteName(thisState.MainStack),
    MainTabs: getCurrentRouteName(thisState.MainTabs)
  };

  const result = next(action);
  thisState = getState();

  const nextScreen = {
    MainStack: getCurrentRouteName(thisState.MainStack),
    MainTabs: getCurrentRouteName(thisState.MainTabs)
  };

  let screenToReport = null;

  if (nextScreen.MainStack !== currentScreen.MainStack) {
    // Stack changed
    screenToReport = nextScreen.MainStack;
  }

  if (nextScreen.MainTabs !== currentScreen.MainTabs || nextScreen.MainStack === 'MainTabs') {
    // Tabs changed or went back to maintabs
    screenToReport = nextScreen.MainTabs;
  }

  if (screenToReport) {
    console.log(`NEW SCREEN: ${screenToReport}`);
  }

  return result;
};

const middleware = [
  thunk,
  screenTracking,
  createReactNavigationReduxMiddleware(
    'MainStack',
    state => state.MainStack,
  ),
  createReactNavigationReduxMiddleware(
    'MainTabs',
    state => state.MainTabs,
  )
];

export function configureStore (initialState: {}): {} {
  return createStore(reducer, initialState, composeEnhancers(applyMiddleware(...middleware), autoRehydrate()));
}

export const store = configureStore();
