import type { FC } from 'react'
import styles from './Fallback.module.scss'
import errorIMG from '../../images/error.png'

var Error : FC = function () {

    return (
        <>
            <div className={styles.Fallback} >
                <img src={errorIMG} alt='error!' />
            </div>
        </>
    )
}

export default Error
