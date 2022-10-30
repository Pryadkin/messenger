import React, {useEffect, useState} from 'react'
import {useReactMediaRecorder} from 'react-media-recorder'
import {useDispatch} from 'react-redux'

import {Button} from 'antd'

import {RecordingStatus} from '../../features/recording/recordingReducer'

enum BtnName {
    STARTRECORDING = 'Начать диктовку',
    STOPRECORDING = 'Остановить диктовку',
}

export const RecordView = () => {
    const dispatch = useDispatch()
    const {
        status, startRecording, stopRecording, mediaBlobUrl,
    } = useReactMediaRecorder({video: true})
    const [btnName, setBtnName] = useState<string>(BtnName.STARTRECORDING)

    useEffect(() => {
        dispatch({
            type: 'recording/setRecordingStatus',
            payload: status,
        })
    }, [dispatch, status])

    useEffect(() => {
        dispatch({
            type: 'messages/addMessage',
            payload: {
                id: Date.now(),
                message: '',
                mediaBlobUrl,
            },
        })
    }, [dispatch, mediaBlobUrl])

    const handleRecording = () => {
        if (status === RecordingStatus.STOPPED || status === RecordingStatus.IDLE) {
            setBtnName(BtnName.STOPRECORDING)
            startRecording()
        }
        if (status === RecordingStatus.RECORDING) {
            setBtnName(BtnName.STARTRECORDING)
            stopRecording()
        }
    }

    return (
        <div>
            <Button type="primary" loading={status === RecordingStatus.ACQUIRING_MEDIA} onClick={handleRecording}>
                {btnName}
            </Button>
        </div>
    )
}
