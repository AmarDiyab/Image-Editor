import { imageReducer, textReducer } from "./reducer";

import {combineReducers, legacy_createStore} from "redux";

const configureStore = () => {
    const rootReducer = combineReducers({
      messages: imageReducer,
      text: textReducer
    });
  
    return legacy_createStore(rootReducer);
  }


export const store = configureStore();
