import styled from 'styled-components'
import {ThemeCustomProps} from '../../components/Theme'

const Container = styled.div`
    border: 1px solid ${(props: ThemeCustomProps) => props.theme.color.grey};
    border-bottom: 0;
    &:last-of-type {
        border-bottom: 1px solid ${(props: ThemeCustomProps) => props.theme.color.grey};
    }
    @media (min-width: 500px) {
        display: flex;
        flex-direction: row;
    }
    &:nth-of-type(odd) {
        @media (min-width: 768px) {
            border-right: 0;
        }
    }
    &:nth-of-type(5) {
        @media (min-width: 768px) {
            border-right: 1px solid ${(props: ThemeCustomProps) => props.theme.color.grey};
        }
    }
    &:nth-of-type(4) {
        @media (min-width: 768px) {
            border-bottom: 1px solid ${(props: ThemeCustomProps) => props.theme.color.grey};
        }
    }
`

const Images = styled.div`
    position: relative; 
    padding: 1rem 1rem 5rem;
    @media (min-width: 500px) {
        padding: 2rem 2rem 5rem;
    }
`

const Favicon = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    border-radius: 50%;
    border: 1px solid ${(props: ThemeCustomProps) => props.theme.color.grey};
    background-color: ${(props: ThemeCustomProps) => props.theme.color.greyLight};
    overflow: hidden;
`

const SourceIcon = styled.span`
    position: absolute;
    top: 70px;
    left: calc(50% + 20px);
`

const Read = styled.span<ThemeCustomProps & {read: boolean}>`
    position: absolute;
    top: calc(50px + 4rem);
    left: 50%;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${(props: ThemeCustomProps & {read: boolean}) => props.read ? 'transparent' : props.theme.color.info};
    transform: translateX(-50%);
`

const Texts = styled.div`
    padding: 1rem;
    @media (min-width: 500px) {
        padding: 2rem;
        flex-grow: 4;
    }
`

const Infos = styled.p`
    display: flex;
    justify-content: space-between;
    margin: 0;
`

const Domain = styled.span`
    color: ${(props: ThemeCustomProps) => props.theme.color.grey};
`

const Date = styled.span<ThemeCustomProps & {read: boolean}>`
    color: ${(props: ThemeCustomProps & {read: boolean}) => props.read ? props.theme.color.grey : props.theme.color.info};
`

const Content = styled.div`
    word-break: break-word;
`

const Title = styled.h3`
    margin: 0.5rem 0;
`

const Description = styled.p`
    margin: 0;
    font-size: large;
    color: ${(props: ThemeCustomProps) => props.theme.color.greyDark};
`

const Card = {
    Container,
    Images,
    Favicon,
    SourceIcon,
    Read,
    Texts,
    Infos,
    Domain,
    Date,
    Content,
    Title,
    Description,
}

export default Card