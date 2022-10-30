import {configureStore} from '@reduxjs/toolkit'

import messagesReducer from './features/message/messagesReducer'

export const store = configureStore({
    reducer: {
        messageList: messagesReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
