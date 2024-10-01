import { styled } from "..";

export const LayoutContainer = styled('div', {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
})

export const LayoutAlignContainer = styled('div', {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '$20',
})

export const LayoutContent = styled('div', {
    display: 'grid',
    width: '40rem',
    gridTemplateColumns: 'repeat(4, auto)',
    gap: '$2',
    paddingBottom: '$6',
})