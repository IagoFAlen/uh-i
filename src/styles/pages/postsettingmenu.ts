import { Heading } from "@bertiare-ui/react";
import { styled } from "..";


export const PostSettingWrapper = styled('div', {

})

export const PostSettingMenuContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$md',
    boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
    background: '$background',
    flexDirection: 'column',
    width: '13rem',
    position: 'absolute',
    marginTop: '$10'
})

export const PostSettingSectionContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    borderBottom: '1px solid $mutedInverse',
})

export const PostSettingContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '$3',
    cursor: 'pointer',
    borderBottom: '1px solid $mutedIcon',

    '&:hover': {
        background: '$mutedIcon',
    },

    variants: {
        color: {
            danger: {
                '> h2': {
                    color: "$danger",
                },

                '> svg': {
                    color: "$danger",
                }
            }
        },
        section: {
            start: {
                borderRadius: '$sm $sm 0 0',
            },
            end: {
                borderBottom: '0',
                borderRadius: '0 0 $sm $sm',
            }
        }
    }
})

