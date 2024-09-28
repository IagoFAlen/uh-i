import { styled } from "..";

export const TabContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '$4',
    cursor: 'pointer',
    width: '100%',
    padding: '$3 $4',
    borderRadius: '$sm',
    transition: 'background 0.2s ease-in-out',
    
    '&:hover': {
        background: '$mutedIcon',
    },

    variants: {
        variant: {
            focus: {
                background: '$mutedIcon',
            },
            profile: {
                padding: '$2 $3',
            },
        }
    }
})