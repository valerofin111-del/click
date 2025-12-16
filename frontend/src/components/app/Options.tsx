import { Flex } from "@radix-ui/themes"
import { useAtom } from "jotai"
import themeAtom from "../../atoms/themeAtom"
// import styles from "../../styles/app.module.scss"
import PickText from "../library/PickText/PickText"

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

                <button onClick={newTheme} >Click to change theme</button>
            </Flex>
        </>
    )
}

export default Options
