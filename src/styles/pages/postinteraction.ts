import { styled } from "@stitches/react"

export const PostInteractions = styled('div', {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-around',
})

export const Interaction = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '$2',
    cursor: 'pointer'
})
