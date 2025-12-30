import { motion, useAnimate } from "motion/react"
import { type FC, type ReactNode } from "react"
import styles from './Card.module.scss'
import { useAtomValue } from "jotai"
import cardThemeAtom from "../../../atoms/cardThemeAtom"

interface CardProps {
    children: ReactNode,
    className: string,
    mouseRotate?: boolean,
}

var Card = (
    ({children, className, mouseRotate} : CardProps ) => {

        var [ coords, animate ] = useAnimate<HTMLDivElement>()

        var mouseMove = (e : any): void => {
            if (!coords.current) return

            var rect = e.currentTarget.getBoundingClientRect()

            var x = e.clientX - rect.left
            var y = e.clientY - rect.top

            var ifRotateNum = mouseRotate ? 1 : 0

            var valueX = ((x / rect.width) * 12 - 6) * ifRotateNum
            var valueY = -((y / rect.height) * 12 - 6) * ifRotateNum

            animate(coords.current, {
                rotateX: valueX,
                rotateY: valueY 
            }, { duration: 0.1 } )

        }

        var mouseLeave = (): void => {
            animate(coords.current, {
                rotateX: 0,
                rotateY: 0
            }, { duration: 0.1 })
        }

        var cardTheme = useAtomValue(cardThemeAtom)

        return (
            <motion.div className={styles[className]}
                    ref={coords}
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    onMouseMove={mouseMove}
                    onMouseLeave={mouseLeave}
                    style={{ transformStyle: 'preserve-3d', backgroundColor: `${cardTheme}` }}
                >
                {children}
            </motion.div>
        )
    }
)

export default Card
