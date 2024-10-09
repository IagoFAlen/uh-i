import { styled } from "@/styles";

export const AccountDetailsDialogContainer = styled('form', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    gap: '$4',
    padding: '$2 $10',
})

export const AccountDetailsLabel = styled('label', {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
})

export const AccountDetailsButtonWrapper = styled('div', {
    width: '100%',
    padding: '$4 0',
})