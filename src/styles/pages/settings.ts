import { styled } from "..";

export const SettingsMenuContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40rem',
    flexDirection: 'column',
    gap: '$2',
})

export const SettingSection = styled('div', {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    borderRadius: '$md',
    padding: '$6 $10',
    gap: '$4',
})

export const SettingSectionHeading = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '$4',

})

export const SettingOptionWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',
    flexDirection: 'column',
})

export const SettingOptionContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    cursor: 'pointer',
    padding: '$5 $6',
    border: '1px solid $mutedIcon',
    borderRadius: '$sm',

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
    }
})
