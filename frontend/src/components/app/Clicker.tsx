import { motion } from 'motion/react'
import styles from '../../styles/app.module.scss'
import { useState } from 'react'

var Clicker = function ({className} : string) {

    var { clicks, setClicks } = useState<number>(0)

    var click = function () {
        setClicks(prev => {
            return prev + 1
        })
    }

    return (
        <>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.3, backgroundColor: 'hsl(0, 59%, 61%)' }} onClick={click} className={styles[className]} ></motion.div>
            <h2>Clicks: {clicks} </h2>
        </>
    )
}

export default Clicker
