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
    padding: '$12',
    gap: '$4',
    border: '1px solid $mutedInverse',
})

export const SettingSectionHeading = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '$4',

})

export const SettingOptionDialogWrapper = styled('div', {
    width: '100%',
})

export const SettingOptionWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$4',
    flexDirection: 'column',
})

export const SettingOptionContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    cursor: 'pointer',
    padding: '$5 $6',
    borderRadius: '$sm',
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',

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
