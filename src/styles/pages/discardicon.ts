import { styled } from "..";

export const DiscardIconContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '$2',
    background: '$mutedIcon',
    color: '$danger',
    cursor: 'pointer',
    borderRadius: '$full',
    transition: 'background 0.2s ease-in-out',


    '&:hover': {
        background: '$mutedInverse',
    }
})