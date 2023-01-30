import { CHANGE_TEXT } from './actionTypes';

const initState = {
    text_value: ""
}

export const imageReducer = (state = initState, action) => {
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
