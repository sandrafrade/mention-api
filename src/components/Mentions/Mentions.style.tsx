import styled from 'styled-components'
import {ThemeCustomProps} from '../../components/Theme'

const Container = styled.div`
    padding: 2rem;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
        max-width: 1200px;
        margin: 0 auto;
    }
`

const MessageInfo = styled.p`
    margin: 2 rem 0; 
    text-align: center;
    color: ${(props: ThemeCustomProps) => props.theme.color.info};
`

const MessageError = styled(MessageInfo)`
    color: ${(props: ThemeCustomProps) => props.theme.color.danger};
`

export {
    Container,
    MessageInfo,
    MessageError,
}