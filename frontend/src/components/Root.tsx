import { Outlet } from "react-router-dom"
import cardThemeAtom from "../atoms/cardThemeAtom"
import { useAtomValue } from "jotai"

var Root = function () {

    var cardTheme = useAtomValue(cardThemeAtom)

    var backgroundColor = cardTheme === 'hsla(0, 0%, 20%, 1.00)' ?  'hsla(0, 0%, 60%, 1.00)' : 'hsla(0, 0%, 20%, 1.00)'

    return (
        <div style={{ backgroundColor: backgroundColor, height: '100vh', width: '100vw' }} >
            <Outlet />
        </div>
    )
}

export default Root
