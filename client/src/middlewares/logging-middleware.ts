import { Dispatch, Middleware, MiddlewareAPI } from "redux";

const loggingMiddleware: Middleware = ({ getState }: MiddlewareAPI) => (next: Dispatch) => (action: { type: string, payload: any }) => {
    const currentState = getState();
    const nextDispatch = next(action);
    const neState = getState();
    console.log(`Executing action `, action);
    console.log(`Current State`, currentState);
    console.log(`Next State`, neState);
    return nextDispatch;
}

export default loggingMiddleware;
