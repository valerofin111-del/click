import { Link } from "react-router-dom"
import { motion } from "motion/react"
import styles from '../styles/welcome.module.scss'
import { Flex } from "@radix-ui/themes"

var Welcome = function () {
    return (
        <Flex justify='center'>
            <motion.div className={styles.Welcome} initial={{ opacity: 0, transition: { duration: 0.1 } }} animate={{ opacity: 1 }} >
                <motion.h1 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >Welcome to <span className={styles.Title} >Click</span></motion.h1>
                
                <motion.div className={styles.Nav} >
                    <Link to='reg' className={styles.Link} >Reg</Link>
                    <Link to='log' className={styles.Link} >Log</Link>
                </motion.div>
            </motion.div>
        </Flex>
    )
}

export default Welcome
