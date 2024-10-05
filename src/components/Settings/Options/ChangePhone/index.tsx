import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { OptionsProps } from "../types";
import { SettingOption } from "../../SettingOption";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { Dialog } from "@/layout/Dialog";

export function ChangePhone(props: OptionsProps){
    return(
        <>
            <SettingOptionDialogWrapper>
                <SettingOption title="Change phone" onClick={() => props.handleDialogToggle('isChangePhoneOpen', props.isDialogOpen)}>
                    <MdOutlinePhoneEnabled size={props.size} />                                
                </SettingOption>
                <Dialog isOpen={ props.isDialogOpen } close={() => props.handleDialogToggle('isChangePhoneOpen', props.isDialogOpen )} />
            </SettingOptionDialogWrapper>
        </>
    )
}