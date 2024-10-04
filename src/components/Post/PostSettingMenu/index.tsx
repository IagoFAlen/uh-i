import { PostSettingContainer, PostSettingMenuContainer, PostSettingSectionContainer } from "@/styles/pages/postsettingmenu";
import { Heading } from "@bertiare-ui/react";
import { IoFlagOutline, IoCopyOutline, IoVolumeMuteOutline, IoVolumeMediumOutline, IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdOutlineBlock, MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { useReducer, useState } from "react";
import { initialState, postSettingMenuReducer } from "@/functions/PostSettingsMenu";
import { PostSettingMenuProps, PostSettingOptionsProps } from "./types";
import { FaRegTrashCan } from "react-icons/fa6";


export function PostSettingMenu(props: PostSettingMenuProps){
    /* Em vez de mute,block e hide, pegar o user_config_post id */
    const [ mute, setMute ] = useState(props.configs.mute)
    const [ block, setBlock ] = useState(props.configs.block)
    const [ hide, setHide ] = useState(props.configs.hide)

    const [ state, dispatch ] = useReducer(postSettingMenuReducer, initialState)
    
    function handleCopyPost(){
        dispatch({ type: 'COPY_POST' })
        props.toggleMenu()
    }

    function handleMutingAccount( action: PostSettingOptionsProps["muting"]) {
        action === 'MUTE' ? dispatch({ type: 'MUTE_ACCOUNT'}) : dispatch({ type: 'UNMUTE_ACCOUNT' })
        setMute(!mute)
        props.toggleMenu()

    }

    function handleBlockingAccount( action: PostSettingOptionsProps["blocking"]){
        action === 'BLOCK' ? dispatch({ type: 'BLOCK_ACCOUNT' }) : dispatch({ type: 'UNBLOCK_ACCOUNT' })
        setBlock(!block)
        props.toggleMenu()

    }

    function handleHidingPost(action: PostSettingOptionsProps["hiding"]){
        action === 'HIDE' ? dispatch({ type: 'HIDE_POST' }) : dispatch({ type: 'SHOW_POST' })
        setHide(!hide)
        props.toggleMenu()

    }

    function handleReportPost(){
        dispatch({ type: 'REPORT_POST' })
        props.toggleMenu()

    }

    function handleDeletePost(){
        dispatch({ type: 'DELETE_POST' })
        props.toggleMenu()
    }

    return(
        <>
            <PostSettingMenuContainer>
                <PostSettingSectionContainer>
                    <PostSettingContainer onClick={ handleCopyPost } section="start">
                        <Heading size="minimum">Copy</Heading>
                        <IoCopyOutline />
                    </PostSettingContainer>
                </PostSettingSectionContainer>

                <PostSettingSectionContainer>
                    { !mute ? 
                        <>
                            <PostSettingContainer onClick={() => { handleMutingAccount('MUTE') }}>
                                <Heading size="minimum">Mute account</Heading>
                                <IoVolumeMuteOutline />
                            </PostSettingContainer>
                        </> :
                        <>
                            <PostSettingContainer onClick={() => { handleMutingAccount('UNMUTE') }}>
                                <Heading size="minimum">Unmute account</Heading>
                                <IoVolumeMediumOutline />
                            </PostSettingContainer>
                        </>
                    }
                
                    { !block ? 
                        <>
                            <PostSettingContainer onClick={() => { handleBlockingAccount('BLOCK') }}>
                                <Heading size="minimum">Block account</Heading>
                                <MdOutlineBlock />
                            </PostSettingContainer>
                        </> :
                        <>
                            <PostSettingContainer onClick={() => { handleBlockingAccount('UNBLOCK') }}>
                                <Heading size="minimum">Unblock account</Heading>
                                <IoCheckmarkDoneSharp />
                            </PostSettingContainer>
                        </>
                    }
                </PostSettingSectionContainer>
                <PostSettingSectionContainer>
                    { !hide ? 
                        <>
                            <PostSettingContainer onClick={() => { handleHidingPost('HIDE') }}>
                                <Heading size="minimum">Hide post for me</Heading>
                                <MdOutlineVisibilityOff />
                            </PostSettingContainer>
                        </> :
                        <>
                            <PostSettingContainer onClick={() => { handleHidingPost('SHOW') }}>
                                <Heading size="minimum">Show post for me</Heading>
                                <MdOutlineVisibility />
                            </PostSettingContainer>
                        </>
                    }

                    <PostSettingContainer onClick={ handleReportPost }>
                        <Heading size="minimum">Report post</Heading>
                        <IoFlagOutline />
                    </PostSettingContainer>
                </PostSettingSectionContainer>
                <PostSettingContainer color="danger" onClick={ handleDeletePost } section="end">
                    <Heading size="minimum">Delete post</Heading>
                    <FaRegTrashCan />
                </PostSettingContainer>

            </PostSettingMenuContainer>
        </>
    )
}
