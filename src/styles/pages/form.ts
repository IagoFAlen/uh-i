import { styled } from "@stitches/react";

export const OptionHeadingLabelWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '$2',
    padding: '$1 $2',
})

export const OptionInputWrapper = styled('div', {
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