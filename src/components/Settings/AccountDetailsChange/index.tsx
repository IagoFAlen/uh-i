import { Dialog } from "@/layout/Dialog";
import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { EditUserInfo, EditUserInfoContainer } from "@/styles/pages/user";
import { IoPencil } from "react-icons/io5";
import { OptionsProps } from "../Options/types";
import { Avatar, Button, Heading, Input } from "@bertiare-ui/react";
import { AccountDetailsButtonWrapper, AccountDetailsDialogContainer, AccountDetailsHeadingWrapper, AccountDetailsLabel } from "@/styles/pages/dialog/changeaccountdetailschange";

export function AccountDetailsChange(props: OptionsProps){
    return(
        <>
            <SettingOptionDialogWrapper>
                <EditUserInfoContainer onClick={() => props.handleDialogToggle('isAccountDetailsOpen', props.isDialogOpen)}>
                    <EditUserInfo>
                        <IoPencil />
                    </EditUserInfo>
                </EditUserInfoContainer>

                <Dialog isOpen={props.isDialogOpen} close={() => props.handleDialogToggle('isAccountDetailsOpen', props.isDialogOpen)}>
                    <AccountDetailsDialogContainer>
                        <Avatar size="xxlarge" src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg"/>
                        <Heading size="small">Dealenc</Heading>
                        <AccountDetailsLabel>
                            <AccountDetailsHeadingWrapper>
                                <Heading size="minimum">Username</Heading>
                            </AccountDetailsHeadingWrapper>
                            <Input value="@Dealenc" fit="100%" />
                        </AccountDetailsLabel>

                        <AccountDetailsLabel>
                            <AccountDetailsHeadingWrapper>
                                <Heading size="minimum">Display name</Heading>
                            </AccountDetailsHeadingWrapper>
                            <Input placeholder="Dealenc" fit="100%"/>
                        </AccountDetailsLabel>

                        <AccountDetailsLabel>
                            <AccountDetailsHeadingWrapper>
                                <Heading size="minimum">Location</Heading>
                            </AccountDetailsHeadingWrapper>
                            <Input placeholder="Brazil" fit="100%"/>
                        </AccountDetailsLabel>
                        <AccountDetailsButtonWrapper>
                            <Button variant="default" fit="100%">Confirm</Button>
                        </AccountDetailsButtonWrapper>
                    </AccountDetailsDialogContainer>
                </Dialog>
            </SettingOptionDialogWrapper>
        </>
    )
}