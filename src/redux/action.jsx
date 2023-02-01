import { CHANGE_TEXT, ADD_MESSAGE } from './actionTypes';

export const text=(payload="")=>({type:CHANGE_TEXT,payload});

export const addMessage = (message) => ({
    type: ADD_MESSAGE,
    message
});