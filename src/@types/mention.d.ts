type MentionSource = 'web' | 'forums' | 'twitter' | 'facebook'

type MentionAuthor = {
    author_unique_id: string
}

type MentionOffsets = {
    title: Array<number>
    description: Array<number>
    description_short: Array<number>
    description_medium: Array<number>
}

type Mention = {
    id: string
    read: boolean
    title: string
    description: string
    description_short: string
    description_medium: string
    published_at: string
    original_url: string
    offsets: MentionOffsets
    source_type: MentionSource
    author_influence: MentionAuthor
}
