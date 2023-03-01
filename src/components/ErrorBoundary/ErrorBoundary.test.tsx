import {render, screen} from '../../utils/tests'

describe('Error boundary', () => {
    const ThrowError = () => {throw new Error()}
    const original = console.error

    const setup = () => {
        console.error = jest.fn()
        render(<ThrowError />)
    }

    afterEach(() => {
        console.error = original
    })

    it('should have an alert role', async () => {
        setup()

        const element = screen.getByRole('alert')
        expect(element).toBeVisible()
    })

    it('should have a heading', async () => {
        setup()

        const element = screen.getByRole('heading')
        expect(element).toBeVisible()
    })
})