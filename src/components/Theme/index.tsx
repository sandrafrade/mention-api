import React from 'react'
import {ThemeProvider, ThemedStyledProps} from 'styled-components'

export const theme = {
    color: {
        grey: '#8D9DAA',
        greyLight: '#F2F2F2',
        greyDark: '#55687B',
        info: '#259ADB',
        danger: 'red'
    }
}

export type ThemeCustomVars = typeof theme

export type ThemeCustomProps = ThemedStyledProps<
    Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref">,
    ThemeCustomVars
>

export default function Theme ({children}: {children: React.ReactNode}) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
