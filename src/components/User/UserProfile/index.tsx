import { EditUserInfo, EditUserInfoContainer, UserProfileCommunityFollowage, UserProfileContainer, UserProfileData, UserProfileInfo } from "@/styles/pages/user";
import { Avatar, Box, Heading, Button, Text } from "@bertiare-ui/react";
import { AccountDetails } from "../AccountDetails";
import { IoPencil } from "react-icons/io5";
import { UserTabs } from "../UserTabMenu";
import { UserProfileProps } from "./types";
import { useReducer, useState } from "react";
import { DialogType, initialState, settingDialogsReducer } from "@/functions/Settings";
import { AccountDetailsChange } from "@/components/Settings/AccountDetailsChange";

export function UserProfile(props: UserProfileProps){
    const [ followage, setFollowage ] = useState<boolean>(false)
    const [state, dispatch] = useReducer(settingDialogsReducer, initialState);
    const { isAccountDetailsOpen } = state;

    function handleFollowage() {
        setFollowage(!followage)
    }
    
    const handleDialogToggle = (dialog: DialogType, isOpen: boolean) => {
        dispatch({ type: isOpen ? 'CLOSE_DIALOG' : 'OPEN_DIALOG', dialog });
    }

    return(
        <>
            <UserProfileContainer>
                <Box>
                    { props.variant === 'personal' && 
                        <>
                            <AccountDetailsChange handleDialogToggle={ () => handleDialogToggle('isAccountDetailsOpen', isAccountDetailsOpen) } isDialogOpen={ isAccountDetailsOpen } />
                        </>
                    }
                    <UserProfileCommunityFollowage>
                        <UserProfileData>
                            <Avatar size="xlarge" src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg"/>
                            <UserProfileInfo>
                                <Heading size="small">Dealenc</Heading>
                                <Text size="xsmall">Brazil</Text>
                            </UserProfileInfo>
                        </UserProfileData>
                        {
                            props.variant !== 'personal' && 
                            <>
                                { followage ? <Button variant="inverse" onClick={handleFollowage} fit="7rem">Followed</Button> : <Button variant="default" onClick={handleFollowage} fit="7rem">Follow</Button> } 
                            </>
                        }
                    </UserProfileCommunityFollowage>
                    <AccountDetails />
                    { props.variant === 'personal' && 
                        <>
                            <UserTabs />
                        </>
                    }
                </Box>
            </UserProfileContainer>
        </>
    )
}