import { styled } from "@stitches/react";

export const RegisterForm = styled('form', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    gap: '$8',
    padding: '$4',
})

export const RegisterLabelsWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    gap: '$4',
    
})

export const RegisterLabel = styled('label', {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',

})

export const RegisterTitleLabelWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 $4',
})

export const RegisterHeadingLabelWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '$2',
    padding: '$1 $2',
})

export const RegisterButtonWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '0',
})

export const RegisterInputWrapper = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    gap: '$2',
})

export const MatchingErrors = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '$2 $4 0',
})