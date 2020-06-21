import { REGISTER_NEW_LOADING, REGISTER_NEW_USER } from '../actions/types';

const initialState = {
    user: [
        {
            name: 'Anantha',
            phone: '9876543210',
            email: 'ananthamadhava95@gmail.com',
            location: 'Bangalore'
        },
        {
            name: 'Pavan',
            phone: '9765432180',
            email: 'pavan.gautham17@gmail.com',
            location: 'Bangalore'
        },
        {
            name: 'Panee',
            phone: '9765432160',
            email: 'paneendra@gmail.com',
            location: 'Bangalore'
        }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case REGISTER_NEW_LOADING:
            return {
                ...state,
                loading: true
            }
        case REGISTER_NEW_USER:
            return {
                ...state,
                user: [...state.user, action.payload],
                loading: false
            }
        default:
            return state;
    }
}