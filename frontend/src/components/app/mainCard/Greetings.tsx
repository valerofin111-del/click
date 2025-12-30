import type { FC } from "react";
import PickText from "../../library/PickText/PickText";
import colorThemeAtom from "../../../atoms/colorThemeAtom";
import { useAtomValue } from "jotai";

var Greetings : FC = () => {

    var theme = useAtomValue(colorThemeAtom)  
    
    return (
        <>
            <PickText className={theme} >Hello from Click!</PickText>
            <PickText className="noClassName">You can chat, add friends and click in this app</PickText>
        </>
    )
} 

export default Greetings
