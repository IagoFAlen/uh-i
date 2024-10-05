import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { OptionsProps } from "../types";
import { SettingOption } from "../../SettingOption";
import { Dialog } from "@/layout/Dialog";
import { FaRegTrashCan } from "react-icons/fa6";

export function DeleteAccount(props: OptionsProps){
    return(
        <>
            <SettingOptionDialogWrapper>
                <SettingOption title="Delete account" color="danger" onClick={() => props.handleDialogToggle('isDeleteAccountOpen', props.isDialogOpen)}>
                    <FaRegTrashCan size={props.size} />                                
                </SettingOption>
                <Dialog isOpen={ props.isDialogOpen } close={() => props.handleDialogToggle('isDeleteAccountOpen', props.isDialogOpen )} />
            </SettingOptionDialogWrapper>
        </>
    )
}