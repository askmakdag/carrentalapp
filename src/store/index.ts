import {AnyAction, configureStore, Middleware, Dispatch} from '@reduxjs/toolkit'
import main from "./mainSlice";
const middleware: Middleware<any, any, Dispatch<AnyAction>>[] = [];

if (process.env.NODE_ENV === `development`) {
    // loads the redux-logger lib only if in the __DEV__ mode
    const { logger } = require(`redux-logger`);
    middleware.push(logger);
}

export const store = configureStore({
    reducer: {
        main,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
