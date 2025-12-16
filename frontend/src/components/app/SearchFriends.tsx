// import { motion } from "motion/react"
import { Flex } from "@radix-ui/themes"
// import styles from '../../styles/app.module.scss'
import PickText from "../library/PickText/PickText"
import themeAtom from "../../atoms/themeAtom"
import { useAtomValue } from "jotai"

var SearchFriends = () => {

    var theme = useAtomValue(themeAtom)

    return (
        <>
            <Flex justify={'center'}>
                <PickText className={theme} >Possible friends</PickText>
            </Flex>
        </>
    )
}

export default SearchFriends
