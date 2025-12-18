import { Flex } from "@radix-ui/themes"
import { motion } from "motion/react"
import { useAtom } from "jotai"
import themeAtom from "../../../atoms/themeAtom"
import styles from "../../../styles/mainCard.module.scss"
import PickText from "../../library/PickText/PickText"

var Options = function () {

    var [ theme, setTheme ] = useAtom(themeAtom)

    var newTheme = () => {
        setTheme(prev => {
            switch(prev) {
                case 'blueTheme': return 'greenTheme';
                case 'greenTheme': return 'redTheme';
                case 'redTheme': return 'orangeTheme';
                case 'orangeTheme': return 'yellowTheme';
                case 'yellowTheme': return 'blueTheme';
                default: return 'blueTheme';
            }

        })
    }

    return (
        <>
            <Flex justify={'center'} direction={'column'} style={{}} >

                <Flex justify={'center'}>
                    <PickText className={theme}>Options</PickText>
                </Flex>

                <motion.button onClick={newTheme} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9, backgroundColor: 'hsl(0, 0%, 5%)' }} >Theme</motion.button>

                <Flex className={styles.Account} justify={'center'} direction={'column'} >
                    
                    <h1 className={styles.Name}>{'UserName'} </h1>
                    <h1 className={styles.Email} >{'user@example.com'} </h1>

                    <Flex className={styles.Actions} justify={'center'}  direction={'row'} >

                        <motion.div className={styles.Leave} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9, backgroundColor: 'hsl(0, 0%, 5%)' }} >
                            <h1>Leave Account</h1>
                        </motion.div>

                        <motion.div className={styles.ChangeKey} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9, backgroundColor: 'hsl(0, 0%, 5%)' }} >
                            <h1>Change Key</h1>
                        </motion.div>

                    </Flex>

                </Flex>

            </Flex>
        </>
    )
}

export default Options
