import { PostSettingContainer, PostSettingMenuContainer, PostSettingSectionContainer } from "@/styles/pages/postsettingmenu";
import { Heading } from "@bertiare-ui/react";
import { IoFlagOutline, IoCopyOutline, IoVolumeMuteOutline, IoVolumeMediumOutline, IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdOutlineBlock, MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { useReducer, useState } from "react";
import { PostSettingMenuState, postSettingMenuReducer } from "@/functions/PostSettingsMenu";
import { PostSettingMenuProps } from "./types";
import { FaRegTrashCan } from "react-icons/fa6";


export function PostSettingMenu(props: PostSettingMenuProps) {
    /* Em vez de mute,block e hide, pegar o user_config_post id */
    const [mute, setMute] = useState(props.configs.mute)
    const [block, setBlock] = useState(props.configs.block)
    const [hide, setHide] = useState(props.configs.hide)

    const initialState: PostSettingMenuState = {
        mutingAccount: mute,
        blockingAccount: mute,
        hidingPost: mute,
    }
    
    const [state, dispatch] = useReducer(postSettingMenuReducer, initialState)

    function handleCopyPost() {
        dispatch({ type: 'COPY_POST' })
        props.toggleMenu()
    }

    function handleMutingAccount() {
        dispatch({ type: 'TOGGLE_STATE', field: 'mutingAccount', value: !state.mutingAccount })
        setMute(!mute)
        props.toggleMenu()

    }

    function handleBlockingAccount() {
        dispatch({ type: 'TOGGLE_STATE', field: 'blockingAccount', value: !state.blockingAccount })
        setBlock(!block)
        props.toggleMenu()
    }

    function handleHidingPost() {
        dispatch({ type: 'TOGGLE_STATE', field: 'hidingPost', value: !state.hidingPost })
        setHide(!hide)
        props.toggleMenu()

    }

    function handleReportPost() {
        dispatch({ type: 'REPORT_POST' })
        props.toggleMenu()

    }

    function handleDeletePost() {
        dispatch({ type: 'DELETE_POST' })
        props.toggleMenu()
    }

    return (
        <>
            <PostSettingMenuContainer>
                <PostSettingSectionContainer>
                    <PostSettingContainer onClick={handleCopyPost} section="start">
                        <Heading size="minimum">Copy</Heading>
                        <IoCopyOutline />
                    </PostSettingContainer>
                </PostSettingSectionContainer>

                <PostSettingSectionContainer>
                    <PostSettingContainer onClick={handleMutingAccount}>
                        {!mute ?
                            <>
                                <Heading size="minimum">Mute account</Heading>
                                <IoVolumeMuteOutline />
                            </> :
                            <>
                                <Heading size="minimum">Unmute account</Heading>
                                <IoVolumeMediumOutline />
                            </>
                        }
                    </PostSettingContainer>

                    <PostSettingContainer onClick={handleBlockingAccount}>
                        {!block ?
                            <>
                                <Heading size="minimum">Block account</Heading>
                                <MdOutlineBlock />
                            </> :
                            <>
                                <Heading size="minimum">Unblock account</Heading>
                                <IoCheckmarkDoneSharp />
                            </>
                        }
                    </PostSettingContainer>
                </PostSettingSectionContainer>
                <PostSettingSectionContainer>
                    <PostSettingContainer onClick={handleHidingPost}>
                        {!hide ?
                            <>
                                <Heading size="minimum">Hide post for me</Heading>
                                <MdOutlineVisibilityOff />
                            </> :
                            <>
                                <Heading size="minimum">Show post for me</Heading>
                                <MdOutlineVisibility />
                            </>
                        }
                    </PostSettingContainer>
                    <PostSettingContainer onClick={handleReportPost}>
                        <Heading size="minimum">Report post</Heading>
                        <IoFlagOutline />
                    </PostSettingContainer>
                </PostSettingSectionContainer>

                <PostSettingContainer color="danger" onClick={handleDeletePost} section="end">
                    <Heading size="minimum">Delete post</Heading>
                    <FaRegTrashCan />
                </PostSettingContainer>

            </PostSettingMenuContainer>
        </>
    )
}
