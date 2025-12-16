// import { motion } from "motion/react"
import { Flex } from "@radix-ui/themes"
// import styles from '../../styles/app.module.scss'
import PickText from "../library/PickText/PickText"
import themeAtom from "../../atoms/themeAtom"
import { useAtomValue } from "jotai"

var Chat = () => {

    var theme = useAtomValue(themeAtom)

    return (
        <>
            <Flex justify={'center'}>
                <PickText className={theme}>Name of chat</PickText>
            </Flex>

            <Flex justify={'center'} direction={'column'}>
                <div>
                    <p>messages</p>
                    <p>messages</p>
                    <p>messages</p>
                    <p>messages</p>
                    <p>messages</p>
                </div>
            </Flex>
        </>
    )
}

export default Chat
