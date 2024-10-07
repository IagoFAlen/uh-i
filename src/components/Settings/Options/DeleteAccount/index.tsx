import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { OptionsProps } from "../types";
import { SettingOption } from "../../SettingOption";
import { Dialog } from "@/layout/Dialog";
import { FaRegTrashCan } from "react-icons/fa6";
import { Button, Heading, Input, Text } from "@bertiare-ui/react";
import { DangerActionWarning, DeleteAccountContainer, DeleteAccountHeadingWrapper, DeleteAccountLabel, DeleteAccountOptions, DestructiveActionConfirmation } from "@/styles/pages/dialog/deleteaccount";

export function DeleteAccount(props: OptionsProps){
    const dialogSize = 48

    return(
        <>
            <SettingOptionDialogWrapper>
                <SettingOption title="Delete account" color="danger" onClick={() => props.handleDialogToggle('isDeleteAccountOpen', props.isDialogOpen)}>
                    <FaRegTrashCan size={props.size} />                                
                </SettingOption>
                <Dialog isOpen={ props.isDialogOpen } close={() => props.handleDialogToggle('isDeleteAccountOpen', props.isDialogOpen )}>
                <DeleteAccountContainer>
                        <DangerActionWarning color="danger" >
                            <FaRegTrashCan size={dialogSize}/>
                            <Heading size="small">Delete account</Heading>
                            <Text>Hi, seems you're requesting a destructive action, be careful! This action can't be undone.</Text>
                        </DangerActionWarning>
                        <DeleteAccountLabel>
                            <DeleteAccountHeadingWrapper>
                                <Heading size="minimum">Confirm password</Heading>
                            </DeleteAccountHeadingWrapper>
                            <Input placeholder="Type your password" type="password" fit="100%"/>
                        </DeleteAccountLabel>
                        <DestructiveActionConfirmation>
                            <Text weight="bold">Are you sure you want to delete your account?</Text>
                            <DeleteAccountOptions>
                                <Button variant="danger" fit="100%">Discard</Button>
                                <Button variant="default" fit="100%">Confirm</Button>
                            </DeleteAccountOptions>
                        </DestructiveActionConfirmation>
                    </DeleteAccountContainer>
                </Dialog>
            </SettingOptionDialogWrapper>
        </>
    )
}