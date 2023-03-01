import React from 'react'
import {Container, Heading} from './ErrorBoundary.style'

type ErrorBoundaryProps = {
    children?: React.ReactNode
}

type ErrorBoundaryState = {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    public state: ErrorBoundaryState = {
        hasError: false
    }

    public static getDerivedStateFromError (_: Error): ErrorBoundaryState {
        return {hasError: true}
    }

    public componentDidCatch (error: Error, errorInfo: React.ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo)
    }

    public render () {
        if (this.state.hasError) {
            return (
                <Container role="alert">
                    <Heading>Sorry... there was an error</Heading>
                </Container>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary