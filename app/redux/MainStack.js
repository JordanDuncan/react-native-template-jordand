/*
 * app/redux/MainStack.js
 */

import { NavigationActions } from 'react-navigation';
import { MainStack, InitialScreen } from 'app/navigators/MainStack/config';

/*
 * Initial State
 */
const initialState = MainStack.router.getStateForAction(MainStack.router.getActionForPathAndParams(InitialScreen));

/*
 * Types
 */
const BACK = 'Navigation/MainStack/BACK';
const PUSH = 'Navigation/MainStack/NAVIGATE';

/*
 * Actions
 */
export function goBack (): Action {
  return {
    type: BACK,
    ...NavigationActions.back({})
  };
}

export function openScreen (screenName: string, params: {} = {}): Action {
  return {
    type: PUSH,
    ...NavigationActions.navigate({
      routeName: screenName,
      params: params
    })
  };
}

/*
 * Reducer
 */
export default function MainStackReducer (state = initialState, action): State {
  switch (action.type) {
  case BACK: {
    const navigationAction = NavigationActions.back({});
    return MainStack.router.getStateForAction(navigationAction, state);
  }
  case PUSH: {
    return MainStack.router.getStateForAction(action, state);
  }
  default: {
    return MainStack.router.getStateForAction(action, state);
  }
  }
}
