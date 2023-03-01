import styled from 'styled-components'
import {ThemeCustomProps} from '../Theme'

const Container = styled.div`
    padding: 2rem;
    border: 1px solid ${(props: ThemeCustomProps) => props.theme.color.danger};
`

const Heading = styled.h1`
    text-align: center;
    color: ${(props: ThemeCustomProps) => props.theme.color.danger};
`

export {
    Container,
    Heading,
}