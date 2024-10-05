import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { OptionsProps } from "../types";
import { SettingOption } from "../../SettingOption";
import { MdLockOutline } from "react-icons/md";
import { Dialog } from "@/layout/Dialog";

export function ChangePassword(props: OptionsProps){
    return(
        <>
            <SettingOptionDialogWrapper>
                <SettingOption title="Change password" onClick={() => props.handleDialogToggle('isChangePasswordOpen', props.isDialogOpen)}>
                    <MdLockOutline size={props.size} />                                
                </SettingOption>
                <Dialog isOpen={ props.isDialogOpen } close={() => props.handleDialogToggle('isChangePasswordOpen', props.isDialogOpen )} />
            </SettingOptionDialogWrapper>
        </>
    )
}