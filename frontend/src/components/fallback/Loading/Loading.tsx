import type { FC } from 'react'
import styles from './Loading.module.scss'
import loadingIMG from '../../../images/loading.png'

var Loading : FC = () => {
 
    return (
        <>
            <div className={styles.Div} >
                <img src={loadingIMG} alt='loading...' ></img>
            </div>             
        </>
    )
}

export default Loading
