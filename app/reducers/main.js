import { SUBMIT_NEW_TEXT } from '../actions/main';

const initialState = {
    mainText: 'Start Here'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_NEW_TEXT:
            return {
                ...state,
                mainText: action.text
            };

            break;
        default:
            return state;
    }
}