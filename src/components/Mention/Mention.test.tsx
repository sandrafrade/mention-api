import {render, screen} from '../../utils/tests'
import {theme} from '../Theme'
import Mention from './index'

const title = 'Dolores voluptas eligendi nobis'
const titleMarked = '<mark>Dolores</mark> voluptas eligendi <mark>nobis</mark>'
const description = 'Lorem ipsum dolor sit amet consectetur adipisicing'
const descriptionMarked = 'Lorem <mark>ipsum</mark> dolor sit amet consectetur adipisicing'
const data: Mention = {
    id: '123',
    read: false,
    title: title,
    description: description,
    description_medium: description,
    description_short: description,
    published_at: '2023-02-28T01:00:00.0+00:00',
    original_url: 'https://google.com',
    offsets: {
        title: [0, 0, 7, 7, 26, 26, 5, 5],
        description: [6, 6, 5, 5],
        description_medium: [6, 6, 5, 5],
        description_short: [6, 6, 5, 5],
    },
    source_type: 'web',
    author_influence: {
        author_unique_id: 'google.com'
    }
}

describe('Mention', () => {
    const setup = () => render(<Mention data={data} />)

    test('should render favicon', () => {
        setup()

        const element = screen.getByTestId('mention-favicon')
        expect(element).toBeVisible()
    })

    test('should render source icon', () => {
        setup()

        const element = screen.getByTitle(data.source_type)
        expect(element).toBeInTheDocument()
    })

    test('should indicate not read', () => {
        setup()

        const element = screen.getByTestId('mention-read')
        expect(element).toHaveStyle(`background-color: ${theme.color.info}`)
    })

    test('should render domain', () => {
        setup()

        const element = screen.getByAltText(data.author_influence.author_unique_id)
        expect(element).toBeVisible()
    })

    test('should render date', () => {
        setup()

        const element = screen.getByText(/28 Feb/)
        expect(element).toBeVisible()
    })

    test('should render date as not read', () => {
        setup()

        const element = screen.getByText(/28 Feb/)
        expect(element).toHaveStyle(`color: ${theme.color.info}`)
    })

    test('should render title', () => {
        setup()

        const element = screen.getByTestId('mention-title')
        expect(element).toHaveTextContent(title)
    })

    test('should mark title search', () => {
        setup()

        const element = screen.getByTestId('mention-title')
        expect(element.innerHTML).toBe(titleMarked)
    })

    test('should render description', () => {
        setup()

        const element = screen.getByTestId('mention-description')
        expect(element).toHaveTextContent(description)
    })

    test('should mark description search', () => {
        setup()

        const element = screen.getByTestId('mention-description')
        expect(element.innerHTML).toBe(descriptionMarked)
    })
})