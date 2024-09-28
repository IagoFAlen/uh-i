import { styled } from "..";

export const UserContent = styled('div', {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    gap: '$2',
    flexDirection: 'column',
})

export const EditUserInfoContainer = styled('header', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    
})

export const EditUserInfo = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$text',

    background: '$mutedIcon',
    borderRadius: '$full',
    padding: '$2',
    transition: 'background 0.2s ease-in-out',
    cursor: 'pointer',

    '&:hover': {
        background: '$mutedInverse',
    } 
})

export const UserProfileContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '40rem',
})

export const UserProfileData = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '$3',
})

export const UserProfileCommunityFollowage = styled('div', {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
})

export const UserProfileInfo = styled('div', {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    flexDirection: 'column',
})

export const AccountDetailsContainer = styled('div', {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
    flexDirection: 'column',
    gap: '$4',
})

export const AccountDetailsCommunity = styled('div', {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    gap: '$10',    
})

export const Data = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',    
})

export const Bio = styled('div', {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
})

export const UserTabMenu = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '$4',
})

export const UserTab = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    padding: '$3 $5',
    borderRadius: '$md',
    cursor: 'pointer',
    transition: 'background 0.2s ease-in-out',
    
    '&:hover': {
        background: '$mutedIcon',
    },

    variants: {
        variant: {
            focus: {
                background: '$mutedIcon',
            }
        }
    }

})
