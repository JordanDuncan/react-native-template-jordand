/*
 * app/redux/MainTabs.js
 */

import { NavigationActions } from 'react-navigation';
import { MainTabs, InitialScreen } from 'app/navigators/MainTabs/config';

/*
 * Initial State
 */
const initialState = MainTabs.router.getStateForAction(MainTabs.router.getActionForPathAndParams(InitialScreen));

/*
 * Types
 */
const GO_TO_TAB = 'Navigation/MainTabs/GO_TO_TAB';

/*
 * Actions
 */
export function goToTab (name: string): Action {
  return {
    type: GO_TO_TAB,
    name: name
  };
}

/*
 * Reducer
 */
export default function MainTabsReducer (state = initialState, action): State {
  switch (action.type) {
  case GO_TO_TAB:
    return MainTabs.router.getStateForAction(
      NavigationActions.navigate({
        routeName: action.name,
        params: {}
      }),
      state
    );
  default:
    return MainTabs.router.getStateForAction(action, state);
  }
}
