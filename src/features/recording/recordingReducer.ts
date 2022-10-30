import {createSlice} from '@reduxjs/toolkit'
// import type {PayloadAction} from '@reduxjs/toolkit'

export enum RecordingStatus {
    STOPPED = 'stopped',
    IDLE = 'idle',
    RECORDING = 'recording',
    ACQUIRING_MEDIA = 'acquiring_media',
}

interface RecordingState {
    recordingStatus: RecordingStatus
}

const initialState: RecordingState = {
    recordingStatus: RecordingStatus.IDLE,
}

export const recordingSlice = createSlice({
    name: 'recording',
    initialState,
    reducers: {
        setRecordingStatus: (state, action) => {
            state.recordingStatus = action.payload
        },
    },
})

export const {setRecordingStatus} = recordingSlice.actions

export default recordingSlice.reducer
