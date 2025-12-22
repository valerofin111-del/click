import { motion, useAnimate } from "motion/react"
import { type ReactNode } from "react"
import styles from './Card.module.scss'

interface CardProps {
    children: ReactNode,
    className: string,
    mouseRotate: boolean
}

var Card = (
    ({children, className, mouseRotate} : CardProps ) => {

        var [ coords, animate ] = useAnimate<HTMLDivElement>()

        var mouseMove = (e): void => {
            if (!coords.current) return

            var rect = e.currentTarget.getBoundingClientRect()

            var x = e.clientX - rect.left
            var y = e.clientY - rect.top

            var ifRotateNum = mouseRotate ? 1 : 0

            var valueX = ((x / rect.width) * 12 - 6) * ifRotateNum
            var valueY = ((y / rect.height) * 12 - 6) * ifRotateNum

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

        return (
            <motion.div className={styles[className]}
                    ref={coords}
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    onMouseMove={mouseMove}
                    onMouseLeave={mouseLeave}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                {children}
            </motion.div>
        )
    }
)

export default Card
