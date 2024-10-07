export interface SettingState {
    isNotificationsOpen: boolean,
    isChangePasswordOpen: boolean,
    isChangePhoneOpen: boolean,
    isDeactivateAccountOpen: boolean,
    isDeleteAccountOpen: boolean,
    is2FAOpen: boolean,
    isAccountDetailsOpen: boolean
}

export type DialogType = 
    | 'isNotificationsOpen'
    | 'isChangePasswordOpen'
    | 'isChangePhoneOpen'
    | 'isDeactivateAccountOpen'
    | 'isDeleteAccountOpen'
    | 'is2FAOpen'
    | 'isAccountDetailsOpen';

export type SettingActions = 
    | { type: 'OPEN_DIALOG', dialog: DialogType }
    | { type: 'CLOSE_DIALOG', dialog: DialogType };

export const initialState: SettingState = {
    isNotificationsOpen: false,
    isChangePasswordOpen: false,
    isChangePhoneOpen: false,
    isDeactivateAccountOpen: false,
    isDeleteAccountOpen: false,
    is2FAOpen: false,
    isAccountDetailsOpen: false
};

export function settingDialogsReducer(state: SettingState, action: SettingActions): SettingState {
    switch (action.type) {
        case 'OPEN_DIALOG':
            return { ...state, [action.dialog]: true };
        case 'CLOSE_DIALOG':
            return { ...state, [action.dialog]: false };
        default:
            return state;
    }
}
