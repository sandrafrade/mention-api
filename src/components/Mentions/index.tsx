import useMentions from './Mentions.logic'
import Mention from '../Mention'
import {Container, MessageError, MessageInfo} from './Mentions.style'

export default function Mentions () {
    const {data, error, isError, isLoading} = useMentions()

    if (isLoading) {
        return <MessageInfo>Loading</MessageInfo>
    }

    if (isError) {
        return <MessageError>{error}</MessageError>
    }

    if (!data?.mentions) {
        return <MessageInfo>No data</MessageInfo>
    }

    const mentions = data.mentions
        .filter((mention: Mention) => ['web', 'forums'].includes(mention.source_type))
        .slice(0, 5)

    return (
        <Container>
            {mentions.map((mention: Mention) =>
                <Mention key={mention.id} data={mention} />)
            }
        </Container>
    )
}                                                                                                                                                                                                           