
import { Navigator } from '../pages/StackNavigatorComponent';


export default function nav(state, action) {

    let nextState;
    switch (action) {
        default:
            nextState = Navigator.router.getStateForAction(action, state);
            break;
    }
    return nextState ? nextState : state;
}