import {configureStore} from '@reduxjs/toolkit'

import messagesReducer from './features/message/messagesReducer'
import recordingReducer from './features/recording/recordingReducer'

export const store = configureStore({
    reducer: {
        messageList: messagesReducer,
        recording: recordingReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
