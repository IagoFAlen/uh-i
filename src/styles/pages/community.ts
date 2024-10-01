import { styled } from "..";

export const CommunityContent = styled('div', {
    display: 'grid',
    width: '40rem',
    gridTemplateColumns: 'repeat(4, auto)',
    gap: '$2',
})

export const CommunityProfiles = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '$3',
})
