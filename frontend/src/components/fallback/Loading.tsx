import type { FC } from 'react'
import styles from './Fallback.module.scss'
import loadingIMG from '../../images/loading.png'

var Loading : FC = () => {
 
    return (
        <>
            <div className={styles.Fallback} >
                <img src={loadingIMG} alt='loading...' ></img>
            </div>             
        </>
    )
}

export default Loading
