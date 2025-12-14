import { Flex } from '@radix-ui/themes'
import styles from '../../styles/app.module.scss'
import { motion } from 'motion/react'
import { Outlet } from 'react-router-dom'

var MainPage = () => {
    return (
    <>
        <Flex justify={'center'} >
            <motion.div className={styles.ChatList} initial={{ y: -120 }} animate={{ y: 0 }} >
                <h1 className={styles.ChatName} >Chats</h1>
            </motion.div>
        </Flex>

        <Flex justify={'center'} direction={'row'} >

            <motion.div className={styles.Main} initial={{ x: -120 }} animate={{ x: 0 }} >
                <Outlet />
            </motion.div>

            <motion.div className={styles.Clicker} initial={{ y: 120 }} animate={{ y: 0 }} >
                <h1>Click!</h1>
                <h2>img</h2>
                <h2>Result: </h2>
            </motion.div>
        </Flex>
    </>
    )
}

export default MainPage
