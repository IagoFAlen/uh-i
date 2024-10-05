import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { OptionsProps } from "../types";
import { SettingOption } from "../../SettingOption";
import { Dialog } from "@/layout/Dialog";
import { LiaUserSlashSolid } from "react-icons/lia";

export function DeactivateAccount(props: OptionsProps){
    return(
        <>
            <SettingOptionDialogWrapper>
                <SettingOption title="Deactivate account" color="danger" onClick={() => props.handleDialogToggle('isDeactivateAccountOpen', props.isDialogOpen)}>
                    <LiaUserSlashSolid size={props.size} />                                
                </SettingOption>
                <Dialog isOpen={ props.isDialogOpen } close={() => props.handleDialogToggle('isDeactivateAccountOpen', props.isDialogOpen )} />
            </SettingOptionDialogWrapper>
        </>
    )
}