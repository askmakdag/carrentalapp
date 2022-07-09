import {AnyAction, configureStore, Middleware, Dispatch} from '@reduxjs/toolkit'
import cars from "./state/cars";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./sagas";

const saga = createSagaMiddleware();
const middleware: Middleware<any, any, Dispatch<AnyAction>>[] = [saga];

if (process.env.NODE_ENV === `development`) {
    // loads the redux-logger lib only if in the __DEV__ mode
    const { logger } = require(`redux-logger`);
    middleware.push(logger);
}

export const store = configureStore({
    reducer: {
        cars,
    },
    middleware,
});

saga.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
