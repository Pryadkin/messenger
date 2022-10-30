import React, {useRef} from 'react'

import {Spin} from 'antd'

import {RecordingStatus} from '../../features/recording/recordingReducer'

import styles from './MessageList.module.scss'

interface Props {
    list: any,
    recordingStatus: any,
}
export type Ref = any

export const MessageList = React.forwardRef<Ref, Props>(({list, recordingStatus}, messageListRef) => {
    const messageRef = useRef<any>()

    return (
        <div className={styles.wrapper}>
            {
                recordingStatus === RecordingStatus.RECORDING
                    ? (
                        <div className={styles.spinContainer}>
                            <Spin tip="Запись голоса..." />
                        </div>
                    )
                    : null
            }
            <div className={styles.messageList} ref={messageListRef}>
                {
                    list?.map((item: any) => (item.mediaBlobUrl
                        ? (
                            <div key={item.id} className={styles.messageItem} ref={messageRef}>
                                <audio src={item.mediaBlobUrl} controls><track kind="captions" /></audio>
                            </div>

                        )
                        : (
                            <div key={item.id} className={styles.messageItem} ref={messageRef}>{item.message}</div>
                        )))
                }
            </div>
        </div>
    )
})
