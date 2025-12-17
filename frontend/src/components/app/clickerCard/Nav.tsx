import { Flex } from '@radix-ui/themes'
import * as Select from '@radix-ui/react-select'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import styles from '../../../styles/clickerCard.module.scss'

var Nav = (
    ({className} : string) => {

        var themeNav = `${className}Nav`

        var nav = useNavigate()

        return (
            <>
                <Flex justify={'center'}>
                    <Select.Root onValueChange={(value) => {
                        nav(`${value}`)
                    }}>
                        <Select.Trigger>
                            Nav
                        </Select.Trigger>
                        <Select.Portal>
                            <Select.Content className={styles[themeNav]} position='popper'>
                                <motion.div initial={{ opacity: 0, transition: { duration: 0.1 } }} animate={{ opacity: 1 }} >
                                    <Select.Viewport>
                                        <Select.Group>
                                            <Select.Item value='chats'><motion.div whileHover={{ x: 12 }} whileTap={{ opacity: 0, transition: { duration: 0.1 } }} >Chats</motion.div></Select.Item>
                                            <Select.Item value='friends'><motion.div whileHover={{ x: 12 }} whileTap={{ opacity: 0, transition: { duration: 0.1 } }} >Friends</motion.div></Select.Item>
                                            <Select.Item value='options'><motion.div whileHover={{ x: 12 }} whileTap={{ opacity: 0, transition: { duration: 0.1 } }} >Options</motion.div></Select.Item>
                                        </Select.Group>
                                    </Select.Viewport>
                                </motion.div>
                            </Select.Content>
                        </Select.Portal>
                    </Select.Root>
                </Flex>
            </>
        )
    }
) 

export default Nav
