import { styled } from "..";

export const TopicContainer = styled('div', {
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',

    '&:hover': {
        transform: 'scale(1.04)',
    }
})

export const TopicBox = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
})

export const TopicHeadingContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
})

export const TopicQuantityContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
})
