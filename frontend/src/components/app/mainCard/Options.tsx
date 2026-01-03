import { Flex } from "@radix-ui/themes"
import { AnimatePresence, motion } from "motion/react"
import { useAtom, useSetAtom } from "jotai"
import colorThemeAtom from "../../../atoms/colorThemeAtom"
import styles from "../../../styles/mainCard.module.scss"
import PickText from "../../library/PickText/PickText"
import cardThemeAtom from "../../../atoms/cardThemeAtom"
import * as Popover from '@radix-ui/react-popover'
import type { FC } from "react"
import { useNavigate } from "react-router-dom"

var Options: FC = function () {

    var [ buttonTheme, setButtonTheme ] = useAtom(colorThemeAtom)
    var setCardTheme = useSetAtom(cardThemeAtom)

    var nav = useNavigate()

    var newButtonTheme = () => {
        setButtonTheme(prev => {
            switch(prev) {
                case 'blueTheme': return 'greenTheme';
                case 'greenTheme': return 'redTheme';
                case 'redTheme': return 'orangeTheme';
                case 'orangeTheme': return 'yellowTheme';
                case 'yellowTheme': return 'blueTheme';
                default: return 'yellowTheme';
            }

        })
    }

    var newCardTheme = () => {
        setCardTheme(prev => {
            switch(prev) {
                case 'hsla(0, 0%, 20%, 1.00)' : return 'hsla(0, 0%, 30%, 1.00)';
                case 'hsla(0, 0%, 30%, 1.00)' : return 'hsla(0, 0%, 20%, 1.00)';
                default: return 'hsla(0, 0%, 20%, 1.00)';
            }
        })
    }

    var leaveAcc = () => {
        localStorage.setItem('token', '')
        nav('/log', { replace: true })
    }

    return (
        <>
            <Flex justify={'center'} direction={'column'} style={{}} >

                <Flex justify={'center'}>
                    <PickText className={buttonTheme}>Options</PickText>
                </Flex>

                <Flex justify={'center'} className={styles.Visual} direction={'column'}  >
                    <Popover.Root>

                        <Popover.Trigger asChild >
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, backgroundColor: 'hsl(0, 0%, 5%)' }} >Visual</motion.button>
                        </Popover.Trigger>

                        <Popover.Portal>

                            <AnimatePresence>
                                <Popover.Content side="bottom" >
                                
                                    <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} className={styles.VisualOptions} >

                                        <motion.button className={styles[buttonTheme + 'LeftBtn']} onClick={newCardTheme} 
                                            whileHover={{ scaleX: 1.1 }} whileTap={{ scale: 1, backgroundColor: 'hsl(0, 0%, 5%)' }} 
                                        >
                                            Theme
                                        </motion.button>
                                
                                        <motion.button className={styles[buttonTheme + 'RightBtn']} onClick={newButtonTheme} 
                                            whileHover={{ scaleX: 1.1 }} whileTap={{ scale: 1, backgroundColor: 'hsl(0, 0%, 5%)' }} 
                                        >
                                            Color
                                        </motion.button>
                                    </motion.div>
                                
                                </Popover.Content>
                            </AnimatePresence>
                            
                        </Popover.Portal>

                    </Popover.Root>

                    <div className={styles.PopoverContentVisualArea} />

                </Flex>

                <Flex className={styles.Account} justify={'center'} direction={'column'} >

                    <Popover.Root>

                        <Popover.Trigger asChild >
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, backgroundColor: 'hsl(0, 0%, 5%)' }} className={styles.AccountOptionsBtn} >{localStorage.getItem('name')} </motion.button>
                        </Popover.Trigger>

                        <Popover.Portal>

                            <AnimatePresence>
                                <Popover.Content side="bottom" >
                            
                                    <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} className={styles.AccountOptions} >

                                        <motion.button onClick={leaveAcc} className={styles.Leave} 
                                            whileHover={{ scaleX: 1.1 }} whileTap={{ scale: 1, backgroundColor: 'hsl(0, 0%, 5%)' }} 
                                        >
                                            Leave
                                        </motion.button>
                                
                                        <motion.button className={styles.Delete} onClick={newButtonTheme} 
                                            whileHover={{ scaleX: 1.1 }} whileTap={{ scale: 1, backgroundColor: 'hsl(0, 0%, 5%)' }} 
                                        >
                                            Change key
                                        </motion.button>

                                        <motion.button className={styles.ChangeKey} onClick={newButtonTheme} 
                                            whileHover={{ scaleX: 1.1 }} whileTap={{ scale: 1, backgroundColor: 'hsl(0, 0%, 5%)' }} 
                                        >
                                            Delete
                                        </motion.button>

                                    </motion.div>


                                
                                </Popover.Content>
                            </AnimatePresence>
                            
                        </Popover.Portal>

                    </Popover.Root>

                    <div className={styles.PopoverContentAccountArea} />

                </Flex>

            </Flex>
        </>
    )
}

export default Options
