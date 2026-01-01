import { motion } from 'motion/react'
import styles from '../../../styles/clickerCard.module.scss'
import clickIMG from '../../../images/click.png'

interface ClickerProps {
    onClick: () => void,
    clicks: number
}

var Clicker = function ({onClick, clicks} : ClickerProps) {

    var size = 1 + clicks * 0.15

    return (
        <>
            <motion.img className={styles.Clicker} 
                onClick={onClick} animate={{ scale: size }} 
                src={clickIMG} alt='Click!' 
            />
        </>
    )
}

export default Clicker
