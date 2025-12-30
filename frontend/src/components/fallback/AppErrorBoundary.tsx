import { ErrorBoundary } from 'react-error-boundary'
import { type ReactNode } from 'react'

interface ErrorFallbackProps {
    error: Error,
    resetErrorBoundary: () => void
}

var ErrorFallback = ({ error, resetErrorBoundary } : ErrorFallbackProps) => {
    return (
        <>
            <h1>Error : {`--> ${error.message}`} </h1>
            <button onClick={resetErrorBoundary}>Try again</button>
        </>
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
