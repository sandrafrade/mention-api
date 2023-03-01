import queryString from 'query-string'
import useRequest from '../../hooks/useRequest'

type RequestType = {
    mentions: Array<Mention>
}

export default function useMentions () {
    const requestInfo: RequestInfo = `${process.env.REACT_APP_MENTION_URL ?? ''}?${queryString.stringify({
        sort: 'published_at',
        limit: 100,
        // limit: 5,
        // q: 'source:(web OR forums) in:(inbox OR archive)',
    })}`
    const requestInit: RequestInit = {
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_MENTION_TOKEN ?? ''}`,
        }
    }

    return useRequest<RequestType>({requestInfo, requestInit})
}