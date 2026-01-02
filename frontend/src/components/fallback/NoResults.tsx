import type { FC } from 'react'
import styles from './Fallback.module.scss'
import noResIMG from '../../images/noRes.png'

var NoResults : FC = () => {
 
    return (
        <>
            <div className={styles.Fallback} >
                <img src={noResIMG} alt='loading...' ></img>
            </div>             
        </>
    )
}

export default NoResults
