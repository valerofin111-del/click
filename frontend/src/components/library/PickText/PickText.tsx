import { type FC, type ReactNode } from "react"
import styles from './PickText.module.scss'

interface PickThemeProps {
    children: ReactNode,
    className: string
}

var PickText : FC = (
    ({children, className} : PickThemeProps) => {
        return (
            <>
                <h1 className={styles[className]} >{children} </h1>
            </>
        )
    }
)

export default PickText
