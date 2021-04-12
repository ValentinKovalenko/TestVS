import { compose, createStore} from "redux";
import {isReducer} from './reducer/isReducer'

export const store = createStore(isReducer, compose)