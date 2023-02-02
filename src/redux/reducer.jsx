import { CHANGE_TEXT } from './actionTypes';

const initState = {
    text_value: ""
}

export const textReducer = (state = initState, action) => {
    switch (action.type) {

        case CHANGE_TEXT: {
            return {
                ...state, text_value: action.payload
            }
        }

        default: {
            return state;
        }
    }
}


