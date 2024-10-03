export interface PostSettingOptionsProps {
    muting: 'MUTE' | 'UNMUTE',
    blocking: 'BLOCK' | 'UNBLOCK',
    hiding: 'HIDE' | 'SHOW'
}

type PostSettingMenuTypes = {
    /// Mudar aqui e só  passar o id do post. Quando ele abrir, vai fazer a requisição pra API e pegar os valores certos no useState pela API em vez de passar por props
    mute: boolean,
    block: boolean,
    hide: boolean,
    /*id: number*/
}


export interface PostSettingMenuProps {
    configs: PostSettingMenuTypes,
    toggleMenu: () => void
}