import Theme from './components/Theme'
import ErrorBoundary from './components/ErrorBoundary'
import Mentions from './components/Mentions'

export default function App () {
    return (
        <Theme>
            <ErrorBoundary>
                <Mentions />
            </ErrorBoundary>
        </Theme>
    )
}