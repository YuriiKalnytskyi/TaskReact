import {combineReducers} from "redux";
import {movieReduser} from "./movieReduser";

export const rootReducer = combineReducers({
    movies:movieReduser
})