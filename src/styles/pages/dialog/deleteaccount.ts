import { styled } from "@/styles";
import { Heading } from "@bertiare-ui/react";

export const DeleteAccountContainer = styled('form', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    padding: '$10',
    gap: '$4',
})

export const DeleteAccountLabel = styled('label', {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    gap: '$1',

})

export const DangerActionWarning = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '$1 $4',
    gap: '$4',

    variants: {
        color: {
            danger: {
                '> h2': {
                    color: "$danger",
                },
                
                '> svg': {
                    color: '$danger',
                },
            }
        },
    }
})

export const DeleteAccountOptions = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',
    width: '100%',
})

export const DestructiveActionConfirmation = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '$4 0',
    gap: '$4',
    width: '100%',
})