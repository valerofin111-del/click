import { Flex } from '@radix-ui/themes'
import { Outlet } from 'react-router-dom'
import Card from '../library/Card/Card'
import { useAtomValue } from 'jotai'
import colorThemeAtom from '../../atoms/colorThemeAtom'
import Nav from './clickerCard/Nav'
import stylesMain from '../../styles/app.module.scss'
import Clicker from './clickerCard/Clicker'
import { useState, type FC } from 'react'

var MainPage : FC = () => {

    var theme = useAtomValue(colorThemeAtom)
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
        <Flex className={stylesMain.App} justify={'center'} >

            <Card className={themeMain} isDarkTheme={true} mouseRotate={true} >
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
