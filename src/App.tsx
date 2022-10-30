/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useRef, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {
    Header,
    MessageList,
    InputContainer,
} from './components'
import {RootState} from './store'

import styles from './App.module.scss'

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
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState<string>()
    const [messageElemHeight, setMessageElemHeight] = useState<React.RefObject<HTMLInputElement>>()
    const messageListRef = useRef<null | HTMLDivElement>()

    const handleValue = ({target}: any) => {
        setInputValue(target.value)
    }
    const handleKeyDown = ({key, target}: any) => {
        // messageListRef.current.scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'end',
        //     alignToTop: true,
        // })
        if (key === 'Enter') {
            // messageListRef.current?.scrollIntoView(true)
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

    const handleMessagePosition = (elem: any) => {
        console.log(elem)
        setMessageElemHeight(elem)
    }

    return (
        <div className="App">
            <Header />
            <MessageList
                ref={messageListRef}
                list={messages}
                getMessagePosition={handleMessagePosition}
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
