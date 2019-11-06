import { ACTION_TYPES } from "./action-types";
import { IActivity } from "../domain/activity";

export const fetchUser = (id: string) => {
    const res = { data: 'some data' };
    return ({ type: ACTION_TYPES.FETCH_USER, payload: res.data });
}

export const fetchUserAsync = (id: string) => async (dispatch: any) => {
    const res = await fetch('/api/current-user');
    const obj = await res.json();
    dispatch({ type: ACTION_TYPES.FETCH_USER, payload: obj });
}

export const createActivity = (activity: IActivity) => async (dispatch: any) => {
    dispatch({type: ACTION_TYPES.START_ACTION});
    console.log(`Creating activity`);
    dispatch({type: ACTION_TYPES.CREATE_ACTIVITY, payload: activity});
}
