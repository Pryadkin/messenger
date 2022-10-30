import {createSlice} from '@reduxjs/toolkit'
// import type {PayloadAction} from '@reduxjs/toolkit'

interface Message {
    id: number,
    message: string | null,
    mediaBlobUrl: string | null,
}

export interface MessagesState {
    messages: Message[],
}

const initialState: MessagesState = {
    messages: [],
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload)
        },
    },
})

export const {addMessage} = messagesSlice.actions

export default messagesSlice.reducer
