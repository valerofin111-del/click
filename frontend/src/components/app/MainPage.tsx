import { Flex } from '@radix-ui/themes'
import styles from '../../styles/app.module.scss'
import { motion } from 'motion/react'
import { Outlet } from 'react-router-dom'
import Card from '../library/Card'

var MainPage = () => {
    return (
    <>
        <Flex justify={'center'} >
            <motion.div className={styles.ChatList} initial={{ y: -120 }} animate={{ y: 0 }} >
                <h1 className={styles.ChatName} >ChatsList</h1>
            </motion.div>
        </Flex>

        <Flex justify={'center'} direction={'row'} >

            <Card className={styles.Main}>
                <Outlet />
            </Card>

            <Card className={styles.Clicker} >
                <h1>Click!</h1>
                <h2>img</h2>
                <h2>Result: </h2>
            </Card>
        </Flex>
    </>
    )
}

export default MainPage
