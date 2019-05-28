import { ACTION_TYPES } from "./action-types";

export const fetchUser = (id: string) => {
    //const res: any = await fetch('api/current-user');
    const res = { data: 'some data' };
    return ({ type: ACTION_TYPES.FETCH_USER, payload: res.data });
}

export const fetchUserAsync = (id: string) => async (dispatch: any) => {
    const res = await fetch('/api/current-user');
    const obj = await res.json();
    dispatch({ type: ACTION_TYPES.FETCH_USER, payload: obj });
}