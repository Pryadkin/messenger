import React from 'react'

import styles from './Header.module.scss'

export const Header = () => (
    <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
            <div className={styles.logo}>LOGO</div>
            <div className={styles.title}>IT переводчик</div>
        </div>
    </div>
)
