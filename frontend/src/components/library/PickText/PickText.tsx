import { type ReactNode } from "react"
import styles from './PickText.module.scss'

interface PickThemeProps {
    children: ReactNode,
    className: string
}

var PickText = (
    ({children, className} : PickThemeProps) => {
        return (
            <>
                <h1 className={styles[className]} >{children} </h1>
            </>
        )
    }
)

export default PickText
