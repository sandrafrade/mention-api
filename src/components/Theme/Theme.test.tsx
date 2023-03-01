import {render, screen} from '../../utils/tests'
import styled, {StyledComponent} from 'styled-components'
import {ThemeCustomProps} from '.'

const RedParagraph: StyledComponent<'p', any> = styled.p`color: ${(props: ThemeCustomProps) => props.theme.color.danger}`

describe('Theme', () => {
    const setup = () => render(<RedParagraph>Lorem</RedParagraph>)

    test('should use theme', () => {
        setup()

        const element = screen.getByText(/Lorem/i)
        expect(element).toHaveStyle('color: red')
    })
})