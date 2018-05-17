
import { Navigator } from '../pages/StackNavigatorComponent';
import {NavigationActions} from "react-navigation";


export default function nav(state, action) {

    let nextState;
    switch (action.type) {
        case 'Login':
            console.log("****************Login*****************");
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
        default:
            nextState = Navigator.router.getStateForAction(action, state);
            break;
    }
    return nextState ? nextState : state;
}