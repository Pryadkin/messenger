import React from 'react'

import Input from 'antd/lib/input'

import {RecordView} from '../RecordView'

import styles from './InputContainer.module.scss'

export const InputContainer = ({
    inputValue,
    handleValue,
    handleKeyDown,
}: any) => (
    <div className={styles.wrapper}>
        <div className={styles.input}>
            <Input
                placeholder="Basic usage"
                value={inputValue}
                onChange={handleValue}
                onKeyDown={handleKeyDown}
            />
        </div>

        <div className={styles.recordContainer}>
            <RecordView />
        </div>
    </div>
)
