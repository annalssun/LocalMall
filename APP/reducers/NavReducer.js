
import {NavigationActions,StackNavigator,StackActions} from "react-navigation";

import {Navigator} from '../pages/StackNavigatorComponent';

const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('home'));

export default function NavReducer(state, action) {
    let nextState;
    switch (action.type) {
        case 'Login':
            nextState = Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName:'Login'}),
                state
            );
            break;
        case 'main':
            nextState = Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName:'AppHome'})
                ,state
            );
            break;
        case 'NewsPage':
            nextState = Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName:'NewsPage'})
                ,state
            );
            break;
        default:
            nextState = Navigator.router.getStateForAction(action, state);
            break;
    }
    return nextState ? nextState : state;
}