// import { motion } from "motion/react"
import { Flex } from "@radix-ui/themes"
// import styles from '../../../styles/mainCard.module.scss'
import PickText from "../../library/PickText/PickText"
import colorThemeAtom from "../../../atoms/colorThemeAtom"
import { useAtomValue } from "jotai"

var Chats = () => {

    var theme = useAtomValue(colorThemeAtom)

    return (
        <>
            <Flex justify={'center'}>
                <PickText className={theme}>Chats</PickText>
            </Flex>

            <Flex justify={'center'} direction={'column'}>
                <p>chat</p>
                <p>chat</p>
                <p>chat</p>
                <p>chat</p>
                <p>chat</p>
                <p>chat</p>
                <p>chat</p>
                <p>chat</p>
            </Flex>
        </>
    )
}

export default Chats
