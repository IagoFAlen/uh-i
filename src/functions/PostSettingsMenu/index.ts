export interface PostSettingMenuState {
    mutingAccount: boolean
    blockingAccount: boolean
    hidingPost: boolean
}

export type PostSettingActions =
    | { type: 'COPY_POST' }
    | { type: 'MUTE_ACCOUNT' }
    | { type: 'UNMUTE_ACCOUNT' }
    | { type: 'BLOCK_ACCOUNT' }
    | { type: 'UNBLOCK_ACCOUNT' }
    | { type: 'HIDE_POST' }
    | { type: 'SHOW_POST' }
    | { type: 'REPORT_POST' }

export const initialState: PostSettingMenuState = {
    mutingAccount: false,
    blockingAccount: false,
    hidingPost: false,
}

export function postSettingMenuReducer(state: PostSettingMenuState, action: PostSettingActions){
    switch(action.type){
        case 'COPY_POST':
            return state
        case 'MUTE_ACCOUNT':
            return { ...state, mutingAccount: true }
        case 'UNMUTE_ACCOUNT':
            return { ...state, mutingAccount: false }
        case 'BLOCK_ACCOUNT':
            return { ...state, blockingAccount: true }
        case 'UNBLOCK_ACCOUNT':
            return { ...state, blockingAccount: false }
        case 'HIDE_POST':
            return { ...state, hidingPost: true }
        case 'SHOW_POST':
            return { ...state, hidingPost: false }
        case 'REPORT_POST':
            return state
        default:
            return state
    }
}