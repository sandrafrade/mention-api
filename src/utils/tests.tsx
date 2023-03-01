import {render, RenderOptions} from '@testing-library/react'
import ErrorBoundary from '../components/ErrorBoundary'
import Theme from '../components/Theme'

type Options = RenderOptions<typeof import('@testing-library/dom/types/queries'), HTMLElement, HTMLElement>
type Wrapper = React.JSXElementConstructor<{children: React.ReactElement<any, string | React.JSXElementConstructor<any>>}>

const wrapper = ({children}: {children?: React.ReactNode}) => {
    return (
        <Theme>
            <ErrorBoundary>
                {children}
            </ErrorBoundary>
        </Theme>
    )
}
const setupWrapper = (wrapper: Wrapper) => (ui: JSX.Element, options?: Options) => render(ui, {wrapper, ...options})
const customRender = setupWrapper(wrapper)

export * from '@testing-library/react'
export * from '@testing-library/jest-dom'
export {
    customRender as render,
}
