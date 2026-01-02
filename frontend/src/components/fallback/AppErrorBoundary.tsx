import { ErrorBoundary } from 'react-error-boundary'
import { type ReactNode } from 'react'
import errorIMG from '../../images/error.png'
import styles from './Fallback.module.scss'

interface ErrorFallbackProps {
    resetErrorBoundary: () => void
}

var ErrorFallback = ({ resetErrorBoundary } : ErrorFallbackProps) => {
    return (
        <div className={styles.Fallback}>
            <img src={errorIMG} onClick={resetErrorBoundary} alt='Click to reset' />
        </div>
    )
}

interface AppErrorBoundaryOptions {
    children: ReactNode
}

var AppErrorBoundary = ({children} : AppErrorBoundaryOptions) => {
    return (
        <>
            <ErrorBoundary FallbackComponent={ErrorFallback} 
                onReset={() => window.location.reload()}
                onError={(error, info) => console.error(error, info)}
            >
                {children}
            </ErrorBoundary>
        </>
    )
}

export default AppErrorBoundary
