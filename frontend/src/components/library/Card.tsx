import { motion } from "motion/react"
import { type ReactNode } from "react"

interface CardProps {
    children: ReactNode,
    className: string
}

var Card = (
    ({children, className} : CardProps ) => {
        return (
            <motion.div className={className} initial={{ opacity: 0, transition: { duration: 0.1 } }} animate={{ opacity: 1 }} >
                {children}
            </motion.div>
        )
    }
)

export default Card
