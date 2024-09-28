import { styled } from "..";

export const LogoContainer = styled('div', {
    display: 'flex',
    alignItems: 'start',
    justifyItems: 'start',
    padding: '0 $6',
})

export const MenuWrapper = styled('div', {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
    flexDirection: 'column',

    overflowY: 'auto',
    padding: '$6',
    maxHeight: '90vh',
    '&::-webkit-scrollbar': {
        backgroundColor: 'transparent',
        width: '2px',
    },

    '&::-webkit-scrollbar-thumb': {
        borderRadius: '$lg'
    }
})

export const MenuContainer = styled('div', {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingBottom: '$4',
    width: '100%',
})

export const MenuSection = styled('div', {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    gap: '$1',
    flexDirection: 'column',
    width: '100%',

})

export const SectionTitle = styled('div', {
    paddingBottom: '$3',
})

export const FooterContainer = styled('footer', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
})