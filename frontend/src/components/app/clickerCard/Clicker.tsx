import { motion } from 'motion/react'
import styles from '../../../styles/clickerCard.module.scss'
import type { FC } from 'react'

interface ClickerProps {
    className: string,
    onClick: () => void,
    clicks: number
}

var Clicker: FC = function ({className, onClick, clicks} : ClickerProps) {

    var themeClicker = `${className}Clicker`
    var themeIndicator = `${className}Indicator`

    var themeCLick = () => {
        switch(className) {
            case 'blueTheme': return 'hsl(212, 43%, 52%)';
            case 'greenTheme': return 'hsl(140, 43%, 52%)';
            case 'redTheme': return 'hsl(0, 43%, 52%)';
            case 'orangeTheme': return 'hsl(34, 75%, 51%)';
            case 'yellowTheme': return 'hsl(51, 75%, 51%)';
            default: return 'hsl(212, 43%, 52%)';
        }
    }

    var size = (clicks + 1) * 0.1

    return (
        <>
            <motion.div className={styles[themeClicker]} >
                <motion.div onClick={onClick} className={styles[themeIndicator]} 
                    animate={{ scale: size }} whileTap={{ scale: size + 0.1 , backgroundColor: themeCLick() }} />
            </motion.div>
        </>
    )
}

export default Clicker
