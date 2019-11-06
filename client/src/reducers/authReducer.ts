import { ACTION_TYPES } from "../actions/action-types";
import { AuthState, ActivityState } from "../store/types";

const authState: AuthState = {
};

const activityState: ActivityState = {
    activities: [],
    loading: false
}

export const authReducer = (state = authState, action: { type: ACTION_TYPES, payload: any }): AuthState => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case ACTION_TYPES.FETCH_USER:
            console.log(`Processing fetch user with payload `, action.payload.id);
            return { ...state, id: action.payload.id };
        default:
            return state;
    }
}

export const activityReducer = (state = activityState, action: { type: ACTION_TYPES, payload: any }): ActivityState => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case ACTION_TYPES.START_ACTION:
            return { ...state, loading: true };
        case ACTION_TYPES.COMPLETE_ACTION:
            return { ...state, loading: false };
        case ACTION_TYPES.CREATE_ACTIVITY:
            return { ...state, activities: state.activities ? [...state.activities, action.payload] : [action.payload] };
        default:
            return state;
    }
}