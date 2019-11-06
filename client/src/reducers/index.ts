import { combineReducers } from "redux";
import { authReducer, activityReducer } from "./authReducer";

export interface Action{
    type: string,
    payload: any
}

export default combineReducers((
    {
        auth: authReducer,
        activityState: activityReducer
    }
))