import { NavigationActions } from 'react-navigation';
import Navigator from '../config/router';

const initialState = Navigator.router.getStateForAction(NavigationActions.init());

export default (state = initialState, actions) => {
    const nextState = Navigator.router.getStateForAction(actions, state);

    return nextState || state;
}