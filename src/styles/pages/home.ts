
import { styled } from "..";

export const HomeContent = styled('div', {
    display: 'grid',
    width: '40rem',
    gridTemplateColumns: 'repeat(4, auto)',
    gap: '$2',
})

export const PublishWrapper = styled('div', {
})

export const PublishContainer = styled('div', {
    background: 'appBackground',
    position: 'fixed',
})

export const PostSection = styled('div', {
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
})