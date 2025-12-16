import { Flex } from '@radix-ui/themes'
import styles from '../../styles/app.module.scss'
import { motion } from 'motion/react'
import { Outlet } from 'react-router-dom'
import Card from '../library/Card/Card'
import PickText from '../library/PickText/PickText'
import { useAtomValue } from 'jotai'
import themeAtom from '../../atoms/themeAtom'
import Nav from './Nav'

var MainPage = () => {

    var theme = useAtomValue(themeAtom)
    var themeMain = theme + 'Main'
    var themeNav = theme + 'Nav'

    return (
    <>
        <Flex justify={'center'} >
            <motion.div className={styles.ChatList} initial={{ y: -120 }} animate={{ y: 0 }} >
                <h1 className={styles.ChatName} >ChatsList</h1>
            </motion.div>
        </Flex>

        <Flex justify={'center'} direction={'row'} >

            <Card className={themeMain}>
                <Outlet />
            </Card>

            <Card className={theme} >

                <Nav className={themeNav} />

                <Flex justify={'center'}>
                    <PickText className={theme}>Click!</PickText>
                </Flex>

                <h2>img</h2>
                <h2>Clicks: {} </h2>
            </Card>
        </Flex>
    </>
    )
}

export default MainPage
