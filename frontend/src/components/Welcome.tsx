import { Link } from "react-router-dom"
import { motion } from "motion/react"
import styles from '../styles/welcome.module.scss'
import { Flex} from "@radix-ui/themes"
import Card from "./library/Card/Card";
import themeAtom from "../atoms/colorThemeAtom";
import { useAtomValue } from "jotai";
import PickText from "./library/PickText/PickText";
import type { FC } from "react";

var Welcome : FC = function () {

    var theme = useAtomValue(themeAtom)

    return (
        <Flex justify='center'>
            <Card className={theme} >
                    <PickText className={theme} >Click</PickText>
                    
                    <motion.div className={styles.Nav} >
                        <Link to='reg' className={styles.Link} >Reg</Link>
                        <Link to='log' className={styles.Link} >Log</Link>
                    </motion.div>
            </Card>
        </Flex>
    )
}

export default Welcome
