import { globalCss } from "@stitches/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },

    'body': {
        '-webkit-font-smoothing': 'antialised',
    },

    '&::-webkit-scrollbar': {
        backgroundColor: 'transparent',
        width: '4px',
    },

    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '$muted',
        borderRadius: '$lg'
    },

    'h1, h2, button': {
        fontFamily: `${GeistSans.style.fontFamily}`,
        fontWeight: 'bolder',
    },

    'body, input, textarea': {
        fontFamily: `${GeistMono.style.fontFamily}`,
    },
})