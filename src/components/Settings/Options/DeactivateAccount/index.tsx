import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { OptionsProps } from "../types";
import { SettingOption } from "../../SettingOption";
import { Dialog } from "@/layout/Dialog";
import { LiaUserSlashSolid } from "react-icons/lia";
import { DangerActionWarning, DeactivateAccountContainer, DeactivateAccountHeadingWrapper, DeactivateAccountLabel, DeactivateAccountOptions, DestructiveActionConfirmation } from "@/styles/pages/dialog/deactivateaccount";
import { Button, Heading, Input, Text } from "@bertiare-ui/react";

export function DeactivateAccount(props: OptionsProps){
    const dialogSize = 48
    return(
        <>
            <SettingOptionDialogWrapper>
                <SettingOption title="Deactivate account" color="danger" onClick={() => props.handleDialogToggle('isDeactivateAccountOpen', props.isDialogOpen)}>
                    <LiaUserSlashSolid size={props.size} />                                
                </SettingOption>
                <Dialog isOpen={ props.isDialogOpen } close={() => props.handleDialogToggle('isDeactivateAccountOpen', props.isDialogOpen )}>
                    <DeactivateAccountContainer>
                        <DangerActionWarning color="danger" >
                            <LiaUserSlashSolid size={dialogSize}/>
                            <Heading size="small">Deactivate account</Heading>
                            <Text>Hi, seems you're requesting a destructive action, be careful! After <strong>30 days</strong> your account will be deleted.</Text>
                        </DangerActionWarning>
                        <DeactivateAccountLabel>
                            <DeactivateAccountHeadingWrapper>
                                <Heading size="minimum">Confirm password</Heading>
                            </DeactivateAccountHeadingWrapper>
                            <Input placeholder="Type your password" type="password" fit="100%"/>
                        </DeactivateAccountLabel>
                        <DestructiveActionConfirmation>
                            <Text weight="bold">Are you sure you want to deactivate your account?</Text>
                            <DeactivateAccountOptions>
                                <Button variant="danger" fit="100%">Discard</Button>
                                <Button variant="default" fit="100%">Confirm</Button>
                            </DeactivateAccountOptions>
                        </DestructiveActionConfirmation>
                    </DeactivateAccountContainer>
                </Dialog>
            </SettingOptionDialogWrapper>
        </>
    )
}