import { Flex } from '@radix-ui/themes'
import { Outlet } from 'react-router-dom'
import Card from '../library/Card/Card'
import { useAtomValue } from 'jotai'
import colorThemeAtom from '../../atoms/colorThemeAtom'
import Nav from './clickerCard/Nav'
import stylesMain from '../../styles/app.module.scss'
import Clicker from './clickerCard/Clicker'
import { useState, type FC } from 'react'
import { motion } from 'motion/react'

var MainPage : FC = () => {

    var theme = useAtomValue(colorThemeAtom)
    var themeMain = `${theme}Main`

    var [ clicks, setClicks ] = useState<number>(0)
    var [ points, setPoints ] = useState<number>(0)

    var click = () => {
        if (clicks === 9) {
            setClicks(prev => prev * 0)
            setPoints(prev => prev + 1)
        } else {
            setClicks(prev => (prev + 1)) 
        }
    }
    return (
    <>
        <Flex className={stylesMain.App} justify={'center'} >

            <Card className={themeMain} mouseRotate={true} >
                <Outlet />
            </Card>

            <Card className={theme} mouseRotate={false} >
                <Nav className={theme} />

                <Clicker clicks={clicks} onClick={click} />

                <motion.p animate={{ y: 80 }} className={stylesMain.Points} >{points} </motion.p>
            </Card>
        </Flex>
    </>
    )
}

export default MainPage
