import { Heading } from "@bertiare-ui/react";
import { styled } from "..";


export const PostSettingWrapper = styled('div', {

})

export const PostSettingMenuContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$md',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
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
    borderBottom: '1px solid $muted',
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
    }
})

