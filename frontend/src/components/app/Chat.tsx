import { motion } from "motion/react"
import { Flex } from "@radix-ui/themes"
import styles from '../../styles/app.module.scss'

var Chat = () => {
    return (
        <>
            <motion.h1 className={styles.Title} >Name of chat</motion.h1>
                
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
