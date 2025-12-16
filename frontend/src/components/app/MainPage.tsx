import { Flex } from '@radix-ui/themes'
import { Outlet } from 'react-router-dom'
import Card from '../library/Card/Card'
import { useAtomValue } from 'jotai'
import themeAtom from '../../atoms/themeAtom'
import Nav from './Nav'
import styles from '../../styles/app.module.scss'
import Clicker from './Clicker'

var MainPage = () => {

    var theme = useAtomValue(themeAtom)
    var themeMain = theme + 'Main'
    var themeNav = theme + 'Nav'
    var themeClicker = theme + 'Clicker'

    return (
    <>
        <Flex className={styles.App} justify={'center'} >

            <Card className={themeMain}>
                <Outlet />
            </Card>

            <Card className={theme} >

                <Nav className={themeNav} />

                <Clicker className={themeClicker} />

            </Card>
        </Flex>
    </>
    )
}

export default MainPage
