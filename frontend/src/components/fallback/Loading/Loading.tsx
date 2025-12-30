import type { FC } from 'react'
import { motion } from 'motion/react'
import styles from './Loading.module.scss'

var Loading : FC = () => {
 
    return (
        <>
            <motion.div className={styles.Div} >
                <p className={styles.Title}>Loading...</p>
            </motion.div>             
        </>
    )
}

export default Loading
