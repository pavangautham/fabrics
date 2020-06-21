import isEmpty from '../../Reusable_Component/is-empty';
import { SET_AUTH_LOADING, SET_CURRENT_USER } from '../actions/types';

const initialState = {
    loading: false,
    isAuthenticated: false,
    user: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_AUTH_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload,
                loading: false
            }
        default:
            return state;
    }
}