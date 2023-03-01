import {render, screen, } from '../../utils/tests'
import Mentions from './index'

jest.mock('./Mentions.logic', () => ({
    __esModule: true,
    default: () => ({
        isError: false,
        isLoading: false,
        data: {
            mentions: [
                {
                    id: '123',
                    read: false,
                    title: 'Title',
                    description: 'Description',
                    description_medium: 'Description',
                    description_short: 'Description',
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
            ]
        }
    })
}))

describe('Mentions', () => {
    const setup = () => render(<Mentions />)

    test('should render mentions', async () => {
        setup()

        const element = await screen.findByText(/Title/i)
        expect(element).toBeInTheDocument()
    })
})