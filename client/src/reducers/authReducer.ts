import { ACTION_TYPES } from "../actions/action-types";

export const authReducer = (state = {}, action: { type: ACTION_TYPES, payload: any }) => {
    if (!action) {
        return state;
    }
    console.log(`Received action: `, action);
    console.log(`current state: `, state);
    switch (action.type) {
        case ACTION_TYPES.FETCH_USER:
            console.log(`Processing fetch user with payload `, action.payload.id);
            return {...state, id: action.payload.id};
        default:
            return state;
    }
}