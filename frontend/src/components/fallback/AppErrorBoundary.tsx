import { ErrorBoundary } from 'react-error-boundary'
import { type ReactNode } from 'react'

interface ErrorFallbackProps {
    error: Error,
    resetErrorBoundary: () => void
}

var ErrorFallback = ({ error, resetErrorBoundary } : ErrorFallbackProps) => {
    return (
        <>
            <h1>Error { '-->', error } </h1>
            <button onClick={resetErrorBoundary}>Try again</button>
        </>
    )
}

var AppErrorBoundary = ({children} : ReactNode) => {
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
