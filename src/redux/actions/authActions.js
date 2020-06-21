import { REGISTER_NEW_USER, SET_AUTH_LOADING, SET_CURRENT_USER } from './types';
import { store } from '../../store';

const { newUser } = store.getState();

// Register New User
export const registerNewUser = (userData, history) => dispatch => {
    localStorage.setItem('fabricspa', userData)
    dispatch ({
        type: REGISTER_NEW_USER,
        payload: userData
    })
    history.push('/wash')
}

// Login User
export const loginUser = (userData, history) => dispatch => {
    localStorage.setItem('fabricspa', userData)
    const { user } = newUser;
    let findExistUser = user.find(x => x.phone === userData)
    if(findExistUser) {
        dispatch({
            type: SET_CURRENT_USER,
            payload: findExistUser
        })
        if(history) {
            history.push('/wash')
        }
    } else {
        console.log('user not found')
        history.push(`/register?newUser=${userData}`)
    }
}