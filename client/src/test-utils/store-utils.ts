import reducers from '../reducers';
import reduxThunk from 'redux-thunk';
import loggingMiddleware from '../middlewares/logging-middleware';
import { applyMiddleware, createStore } from 'redux';
import { AppState } from '../store/types';

export const createTestStore = (initialState: AppState) => {
    const store = createStore(reducers, initialState, applyMiddleware(loggingMiddleware, reduxThunk));
    return store;
}

