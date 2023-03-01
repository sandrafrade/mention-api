import Card from './Mention.style'

export default function Mention ({data}: {data: Mention}) {
    const markOccurences = (text: string, occurences: number[]): string => {
        if (!occurences.length || occurences.length < 4) {
            return text
        }

        const utf16Indexes = occurences.filter((o, i) => i % 2 !== 0)
        const expressions: string[] = []
        let result: string = text

        for (let i = 0; i < utf16Indexes.length; i += 2) {
            expressions.push(text.substring(utf16Indexes[i], utf16Indexes[i] + utf16Indexes[i + 1]))
        }

        Array.from(new Set(expressions)).forEach((expression) =>
            result = result.replace(expression, `<mark>${expression}</mark>`)
        )

        return result
    }

    return (
        <Card.Container>
            <Card.Images>
                <Card.Favicon>
                    <img
                        src={`https://www.google.com/s2/favicons?domain=${data.original_url}&sz=50`}
                        alt={data.author_influence.author_unique_id}
                        data-testid="mention-favicon"
                    />
                </Card.Favicon>
                <Card.SourceIcon>
                    <svg width={24} height={24}>
                        <title>{data.source_type}</title>
                        <use xlinkHref={`/source_type.svg#${data.source_type}`} />
                    </svg>
                </Card.SourceIcon>
                <Card.Read
                    read={data.read}
                    data-testid="mention-read"
                />
            </Card.Images>
            <Card.Texts>
                <Card.Infos>
                    <Card.Domain>
                        {data.author_influence.author_unique_id}
                    </Card.Domain>
                    <Card.Date read={data.read}>
                        {(new Date(data.published_at)).toLocaleString('en-GB', {month: 'short', day: 'numeric'})}
                    </Card.Date>
                </Card.Infos>
                <Card.Content>
                    <Card.Title
                        data-testid="mention-title"
                        dangerouslySetInnerHTML={{
                            __html: markOccurences(data.title, data.offsets.title)
                        }}
                    ></Card.Title>
                    <Card.Description
                        data-testid="mention-description"
                        dangerouslySetInnerHTML={{
                            __html: markOccurences(data.description_short, data.offsets.description_short)
                        }}
                    ></Card.Description>
                </Card.Content>
            </Card.Texts>
        </Card.Container>
    )
}