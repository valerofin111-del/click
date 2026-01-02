import { Flex } from '@radix-ui/themes'
import { Outlet } from 'react-router-dom'
import Card from '../library/Card/Card'
import { useAtomValue } from 'jotai'
import colorThemeAtom from '../../atoms/colorThemeAtom'
import Nav from './clickerCard/Nav'
import stylesMain from '../../styles/app.module.scss'
import Clicker from './clickerCard/Clicker'
import { type FC } from 'react'
import { motion } from 'motion/react'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

var MainPage : FC = () => {

    var theme = useAtomValue(colorThemeAtom)
    var themeMain = `${theme}Main`

    var mutation = useMutation({
        mutationFn: async () => {
            var response = await axios.post('http://localhost:5000/user/click', 
                { name: localStorage.getItem('name') }, 
                { 
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    } 
                } 
            )
            return response.data
        },
        onSuccess: (response) => {
            localStorage.setItem('clicks', response.clicks)
            localStorage.setItem('points', response.points)
        },
        onError: (e : any) => console.error(e)
    })

    var addClick = () => mutation.mutate()

    return (
    <>
        <Flex className={stylesMain.App} justify={'center'} >

            <Card className={themeMain} mouseRotate={true} >
                <Outlet />
            </Card>

            <Card className={theme} mouseRotate={false} >
                <Nav className={theme} />

                <Clicker onClick={addClick} clicks={localStorage.getItem('clicks')} />

                <motion.p animate={{ y: 80 }} className={stylesMain.Points} >{localStorage.getItem('points')} </motion.p>
            </Card>
        </Flex>
    </>
    )
}

export default MainPage
