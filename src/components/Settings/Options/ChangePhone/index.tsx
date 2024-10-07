import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { OptionsProps } from "../types";
import { SettingOption } from "../../SettingOption";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { Dialog } from "@/layout/Dialog";
import { ChangePhoneContainer, ChangePhoneHeadingWrapper, ChangePhoneLabel } from "@/styles/pages/dialog/changephone";
import { RiPhoneFill } from "react-icons/ri";
import { Button, Heading, Input, Text } from "@bertiare-ui/react";

export function ChangePhone(props: OptionsProps){
    const dialogSize = 48

    return(
        <>
            <SettingOptionDialogWrapper>
                <SettingOption title="Change phone" onClick={() => props.handleDialogToggle('isChangePhoneOpen', props.isDialogOpen)}>
                    <MdOutlinePhoneEnabled size={props.size} />                                
                </SettingOption>
                <Dialog isOpen={ props.isDialogOpen } close={() => props.handleDialogToggle('isChangePhoneOpen', props.isDialogOpen )}>
                    <ChangePhoneContainer>
                        <RiPhoneFill size={dialogSize}/>
                        <Heading size="small">Change phone</Heading>
                        <Text>Hi, seems you want to change your phone. You can do it over here:</Text>
                        <ChangePhoneLabel>
                            <ChangePhoneHeadingWrapper>
                                <Heading size="minimum">Phone</Heading>
                            </ChangePhoneHeadingWrapper>
                            <Input placeholder="Type your new phone over here" type="password" fit="100%" />
                        </ChangePhoneLabel>
                        <Button variant="default" fit="100%">Confirm</Button>
                    </ChangePhoneContainer>
                </Dialog>
            </SettingOptionDialogWrapper>
        </>
    )
}