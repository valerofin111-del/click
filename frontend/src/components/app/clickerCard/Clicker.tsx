import { motion } from 'motion/react'
import styles from '../../../styles/clickerCard.module.scss'

interface ClickerProps {
    className: string,
    onClick: () => void,
    clicks: number
}

var Clicker = function ({className, onClick, clicks} : ClickerProps) {

    var themeClicker = `${className}Clicker`
    var themeIndicator = `${className}Indicator`

    var size = (clicks + 1) * 0.1

    return (
        <>
            <motion.div className={styles[themeClicker]} >
                <motion.div onClick={onClick} className={styles[themeIndicator]} animate={{ scale: size }} whileTap={{ scale: size + 0.1 , backgroundColor: 'hsl(0, 59%, 61%)' }} />
            </motion.div>
        </>
    )
}

export default Clicker
