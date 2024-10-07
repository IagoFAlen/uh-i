import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { OptionsProps } from "../types";
import { SettingOption } from "../../SettingOption";
import { MdLockOutline } from "react-icons/md";
import { Dialog } from "@/layout/Dialog";
import { Button, Heading, Input, Text } from "@bertiare-ui/react";
import { ChangePasswordContainer, ChangePasswordHeadingWrapper, ChangePasswordLabel } from "@/styles/pages/changepassword";
import { RiLockPasswordFill } from "react-icons/ri";

export function ChangePassword(props: OptionsProps){
    return(
        <>
            <SettingOptionDialogWrapper>
                <SettingOption title="Change password" onClick={() => props.handleDialogToggle('isChangePasswordOpen', props.isDialogOpen)}>
                    <MdLockOutline size={props.size} />                                
                </SettingOption>
                <Dialog isOpen={ props.isDialogOpen } close={() => props.handleDialogToggle('isChangePasswordOpen', props.isDialogOpen )} >
                    <ChangePasswordContainer>
                        <RiLockPasswordFill size={48}/>
                        <Heading size="small">Change password request</Heading>
                        <Text>Hi, seems you want to change your password. You can do it over here:</Text>
                        <ChangePasswordLabel>
                            <ChangePasswordHeadingWrapper>
                                <Heading size="minimum">Password</Heading>
                            </ChangePasswordHeadingWrapper>
                            <Input placeholder="Type your password" type="password" fit="100%"/>
                        </ChangePasswordLabel>
                        <ChangePasswordLabel>
                            <ChangePasswordHeadingWrapper>
                                <Heading size="minimum">Password</Heading>
                            </ChangePasswordHeadingWrapper>
                            <Input placeholder="Type new password" type="password" fit="100%"/>
                        </ChangePasswordLabel>
                        <ChangePasswordLabel>
                            <ChangePasswordHeadingWrapper>
                                <Heading size="minimum">Confirm new password</Heading>
                            </ChangePasswordHeadingWrapper>
                            <Input placeholder="Type new password again" type="password" fit="100%"/>
                        </ChangePasswordLabel>
                        <Button variant="default" fit="100%">Confirm</Button>
                    </ChangePasswordContainer>
                </Dialog>
            </SettingOptionDialogWrapper>
        </>
    )
}