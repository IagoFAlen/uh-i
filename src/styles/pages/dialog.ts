import { styled } from "..";

export const DialogContainer = styled('div', {
    position: 'fixed',
    top: '0px',
    right: '0px',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '$opacityBackground',
    zIndex: '1',

})

export const DialogBox = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '$2',
    padding: '$4',
    width: '40rem',
    background: '$background',
    border: '1px solid $mutedInverse',
    borderRadius: '$md',
    transition: 'all 0.5s ease-in-out',

    '&:hover': {
        background: '$hoverDepth',
    }
})

export const CloseContainerWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    padding: '$4 0',
})

export const CloseContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$1',
    padding: '0 $4',
    cursor: 'pointer',
})