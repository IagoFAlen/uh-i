export interface PostSettingMenuState {
    mutingAccount: boolean;
    blockingAccount: boolean;
    hidingPost: boolean;
}

export type ToggleActionType = 
                                'mutingAccount'
                            |   'blockingAccount'
                            |   'hidingPost'
                            
export type PostSettingActions =
                            | { type: 'COPY_POST' }
                            | { type: 'REPORT_POST' }
                            | { type: 'DELETE_POST' }
                            | { type: 'TOGGLE_STATE', field: ToggleActionType, value: boolean }

export const initialState: PostSettingMenuState = {
    mutingAccount: false,
    blockingAccount: false,
    hidingPost: false,
}

export function postSettingMenuReducer(state: PostSettingMenuState, action: PostSettingActions): PostSettingMenuState{
    switch (action.type) {
        case 'COPY_POST':
            return state
        case 'REPORT_POST':
            return state
        case 'DELETE_POST':
            return state; 
        case 'TOGGLE_STATE':
            return { ...state, [action.field]: action.value };
        default:
            return state;
    }
}