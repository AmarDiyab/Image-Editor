import { CHANGE_TEXT, ADD_MESSAGE } from './actionTypes';

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


export const imageReducer = (state = [], action) => {
    switch (action.type) {

        case ADD_MESSAGE:
            return [...state, action.message];

        default: {
            return state;
        }

    }
}


