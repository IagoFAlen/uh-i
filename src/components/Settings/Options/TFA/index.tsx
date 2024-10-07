import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { OptionsProps } from "../types";
import { SettingOption } from "../../SettingOption";
import { Dialog } from "@/layout/Dialog";
import { MdOutlineSystemSecurityUpdateWarning, MdSecurityUpdateWarning } from "react-icons/md";
import { Button, Heading, Text } from "@bertiare-ui/react";
import { TFAContainer, TFAOptions } from "@/styles/pages/dialog/tfa";

export function TFA(props: OptionsProps){
    const dialogSize = 48
    return(
        <>
            <SettingOptionDialogWrapper>
                <SettingOption title="Enable 2FA" onClick={() => props.handleDialogToggle('is2FAOpen', props.isDialogOpen)}>
                    <MdOutlineSystemSecurityUpdateWarning size={props.size} />                                
                </SettingOption>
                <Dialog isOpen={props.isDialogOpen} close={() => props.handleDialogToggle('is2FAOpen', props.isDialogOpen)}>
                    <TFAContainer>
                        <MdSecurityUpdateWarning size={dialogSize}/>
                        <Heading size="small">Two-Factor Authentication</Heading>
                        <Text>Hi, seems you want to increase your account security. Please, choose between phone and email to send confirmation code.</Text>
                        <TFAOptions>
                            <Button variant="default" fit="100%">E-mail confirmation</Button>
                            <Button variant="default" fit="100%">Phone confirmation</Button>
                        </TFAOptions>
                    </TFAContainer>
                </Dialog>
            </SettingOptionDialogWrapper>
        </>
    )
}