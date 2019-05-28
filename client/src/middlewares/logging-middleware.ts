import { Store, Dispatch, Middleware, MiddlewareAPI } from "redux";

const loggingMiddleware: Middleware = ({getState}: MiddlewareAPI ) => (next: Dispatch) => (action: { type: string, payload: any }) => {
    console.log(`Executing action ` + action.type);
    console.log(`Current state: `, getState());
    const nextDispatch = next(action);
    console.log(`New state: `, getState());
    return nextDispatch;
}

export default loggingMiddleware;