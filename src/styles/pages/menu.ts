import { styled } from "..";

export const MenuWrapper = styled('div', {
    height: '93vh',
    overflowY: 'auto',
    padding: '$4',

    '&::-webkit-scrollbar': {
        backgroundColor: 'transparent',
        width: '2px',
    },

    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '$backgroundInverse',
        borderRadius: '$lg'
    }
})

export const MenuContainer = styled('div', {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingBottom: '$4',
    borderBottom: '1px solid $backgroundInverse',
})

export const MenuSection = styled('div', {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    gap: '$3',
    flexDirection: 'column',
})

export const SectionTitle = styled('div', {
    paddingBottom: '$3',
})