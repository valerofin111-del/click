import { Flex } from '@radix-ui/themes'
import * as Select from '@radix-ui/react-select'
import { AnimatePresence, motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import styles from '../../../styles/clickerCard.module.scss'
import type { FC } from 'react'

var Nav : FC = (
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
                            <AnimatePresence>
                                <Select.Content className={styles[themeNav]} position='popper' asChild>
                                    <motion.div initial={{ scaleY: 0, transformOrigin: 'top center' }} animate={{ scaleY: 1 }} >
                                        <Select.Viewport>
                                            <Select.Group>
                                                <Select.Item value='chats'><motion.div initial={{ opacity: 0.7 }} whileHover={{ opacity: 1 }} whileTap={{ opacity: 0, transition: { duration: 0.1 } }} >Chats</motion.div></Select.Item>
                                                <Select.Item value='friends'><motion.div initial={{ opacity: 0.7 }} whileHover={{ opacity: 1 }} whileTap={{ opacity: 0, transition: { duration: 0.1 } }} >Friends</motion.div></Select.Item>
                                                <Select.Item value='options'><motion.div initial={{ opacity: 0.7 }} whileHover={{ opacity: 1 }} whileTap={{ opacity: 0, transition: { duration: 0.1 } }} >Options</motion.div></Select.Item>
                                            </Select.Group>
                                        </Select.Viewport>
                                    </motion.div>
                                </Select.Content>
                            </AnimatePresence>
                        </Select.Portal>
                    </Select.Root>
                </Flex>
            </>
        )
    }
) 

export default Nav
