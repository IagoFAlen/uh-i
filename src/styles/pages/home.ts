import { styled } from "..";

export const HomeContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
})

export const FeedContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$6',

})


export const PublishWrapper = styled('div', {
    position: 'relative',
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