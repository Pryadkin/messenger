import {createSlice} from '@reduxjs/toolkit'
// import type {PayloadAction} from '@reduxjs/toolkit'

interface Message {
    id: number,
    message: string,
}

export interface MessagesState {
    messages: Message[]
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

// Action creators are generated for each case reducer function
export const {addMessage} = messagesSlice.actions

export default messagesSlice.reducer
