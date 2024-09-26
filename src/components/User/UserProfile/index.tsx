import { EditUserInfo, EditUserInfoContainer, UserProfileContainer, UserProfileData, UserProfileInfo } from "@/styles/pages/user";
import { Avatar, Box, Heading, Text } from "@bertiare-ui/react";
import { AccountDetails } from "../AccountDetails";
import { IoPencil } from "react-icons/io5";
import { UserTabs } from "../UserTabMenu";

export function UserProfile(){
    return(
        <>
            <UserProfileContainer>
                <Box>
                    <EditUserInfoContainer>
                        <EditUserInfo>
                            <IoPencil />
                        </EditUserInfo>
                    </EditUserInfoContainer>
                        <UserProfileData>
                            <Avatar size="xlarge" src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg"/>
                            <UserProfileInfo>
                                <Heading size="small">Dealenc</Heading>
                                <Text size="xsmall">Brazil</Text>
                            </UserProfileInfo>
                        </UserProfileData>
                        <AccountDetails />
                        <UserTabs />
                </Box>
            </UserProfileContainer>
        </>
    )
}