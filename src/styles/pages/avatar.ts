import { styled } from "@stitches/react";

export const AvatarWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '$3',
    background: '$mutedIcon',
    borderRadius: '$full',

    '&:hover': {
        background: '$mutedInverse',
    }
})


export const EditAvatarContainer = styled('div', {
    cursor: 'pointer',
    position: 'relative',
    
    '&:hover': { 
        '> div': { 
            visibility: 'visible'
        },
    }
})

export const EditAvatarBox = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '$1',
    position: 'absolute',
    width: '7.5rem',
    height: '7.5rem',
    borderRadius: '$full', 
    background: '$opacityBackground',

    top: 0,
    left: 0,

    visibility: 'hidden',
})