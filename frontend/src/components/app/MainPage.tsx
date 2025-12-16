import { Flex } from '@radix-ui/themes'
import styles from '../../styles/app.module.scss'
import { motion } from 'motion/react'
import { Outlet } from 'react-router-dom'
import Card from '../library/Card'
import PickText from '../library/PickText/PickText'
import { useAtomValue } from 'jotai'
import themeAtom from '../../atoms/themeAtom'

var MainPage = () => {

    var theme = useAtomValue(themeAtom)

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
                
                <Flex justify={'center'}>
                    <PickText className={theme}>Click!</PickText>
                </Flex>

                <h2>img</h2>
                <h2>Result: </h2>
            </Card>
        </Flex>
    </>
    )
}

export default MainPage
