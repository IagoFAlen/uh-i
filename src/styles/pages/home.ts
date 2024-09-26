
import { styled } from "..";

export const HomeContainer = styled('div', {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
    gap: '$6',
    width: 'calc(100% - (18rem + 5rem))' // Total Width - (Aside Size + Gap Between Grid Size)
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