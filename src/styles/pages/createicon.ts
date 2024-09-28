import { styled } from "..";

export const CreateIconContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$text',
    cursor: 'pointer',
    padding: '$2',
    background: '$mutedIcon',
    borderRadius: '$full',
    transition: 'background 0.2s ease-in-out',

    '&:hover': {
        background: '$mutedInverse',
    }
})