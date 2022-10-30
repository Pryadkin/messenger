import React, {useEffect, useRef, useState} from 'react'

import styles from './MessageList.module.scss'

interface Props {
    list: any,
    getMessagePosition: (item: any) => any
}
export type Ref = any

export const MessageList = React.forwardRef<Ref, Props>(({list, getMessagePosition}, messageListRef) => {
    const messageRef = useRef<any>()

    return (
        <div className={styles.wrapper}>
            {/* <div className={styles.container}> */}
            <div className={styles.messageList} ref={messageListRef}>
                {
                    list?.map((item: any) => (
                        <div key={item.id} className={styles.messageItem} ref={messageRef}>{item.message}</div>
                    ))
                }
            </div>
            {/* </div> */}
        </div>
    )
})
