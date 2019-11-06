import { IActivity } from "../domain/activity";

export interface AppState {
    auth: AuthState;
    activityState: ActivityState;
}

export interface AuthState {
    id?: string;
}

export interface ActivityState {
    activities: IActivity[],
    loading: boolean
}