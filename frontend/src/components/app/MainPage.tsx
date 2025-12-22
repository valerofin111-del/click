import { Flex } from '@radix-ui/themes'
import { Outlet } from 'react-router-dom'
import Card from '../library/Card/Card'
import { useAtomValue } from 'jotai'
import themeAtom from '../../atoms/themeAtom'
import Nav from './clickerCard/Nav'
import styles from '../../styles/app.module.scss'
import Clicker from './clickerCard/Clicker'
import { useState } from 'react'

var MainPage = () => {

    var theme = useAtomValue(themeAtom)
    var themeMain = `${theme}Main`

    var [ clicks, setClicks ] = useState<number>(0)
    var [ cycle, setCycle ] = useState<number>(0)

    var click = () => {
        if (clicks === 9) {
            setClicks(prev => prev * 0)
            setCycle(prev => prev + 1)
        } else {
            setClicks(prev => (prev + 1)) 
        }
    }
    return (
    <>
        <Flex className={styles.App} justify={'center'} >

            <Card className={themeMain} mouseRotate={true} >
                <Outlet />
            </Card>

            <Card className={theme} mouseRotate={false} >
                <Nav className={theme} />

                <Clicker className={theme} clicks={clicks} onClick={click} />

                <p>Clicks: {clicks} </p>
                <p>Cycle: {cycle} </p>
            </Card>
        </Flex>
    </>
    )
}

export default MainPage
