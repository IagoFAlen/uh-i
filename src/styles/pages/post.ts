import { Text } from "@bertiare-ui/react";
import { styled } from "..";

export const PostContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '40rem',
})

export const SettingsContainer = styled('header', {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'flex-end',
    cursor: 'pointer',
})

export const SettingsIcon = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$full',
    padding: '$2',
    transition: 'background 0.2s ease-in-out',

    '&:hover': {
        background: '$mutedIcon',
    }
})

export const ProfileContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    paddingBottom: '$4',
    borderBottom: '1px solid $backgroundInverse',
    cursor: 'pointer',
})

export const ProfileInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
})

export const ContentContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
    paddingBottom: '$4',
    cursor: 'pointer',
})

export const EllipsisText = styled(Text, {
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
})