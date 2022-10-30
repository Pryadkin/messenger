/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useRef, useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {
    Header,
    MessageList,
    InputContainer,
} from './components'
import {RecordingStatus} from './features/recording/recordingReducer'
import {RootState} from './store'

// import styles from './App.module.scss'

const App = () => {
    // const webSocket = new WebSocket('ws://localhost:8080')

    // webSocket.addEventListener('message', message => {
    //     // console.log(JSON.parse(message.data))
    // })

    // webSocket.addEventListener('open', () => {
    //     webSocket.send(JSON.stringify({
    //         type: 'echo',
    //         payload: 'test',
    //     }))
    // })

    const messages = useSelector((state: RootState) => state.messageList.messages)
    const recordingStatus = useSelector((state: RootState) => state.recording.recordingStatus)
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState<string>()
    const messageListRef = useRef<null | HTMLDivElement>()

    const handleValue = ({target}: any) => {
        setInputValue(target.value)
    }
    const handleKeyDown = ({key, target}: any) => {
        if (key === 'Enter') {
            messageListRef?.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            })
            dispatch({
                type: 'messages/addMessage',
                payload: {
                    id: Date.now(),
                    message: target.value,
                },
            })
            setInputValue('')
        }
    }

    useEffect(() => {
        if (recordingStatus === RecordingStatus.STOPPED) {
            messageListRef?.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            })
        }
    }, [dispatch, recordingStatus])

    return (
        <div className="App">
            <Header />
            <MessageList
                ref={messageListRef}
                list={messages}
                recordingStatus={recordingStatus}
            />

            <InputContainer
                inputValue={inputValue}
                handleValue={handleValue}
                handleKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default App
