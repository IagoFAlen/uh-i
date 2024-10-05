import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { OptionsProps } from "../types";
import { SettingOption } from "../../SettingOption";
import { Dialog } from "@/layout/Dialog";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineSystemSecurityUpdateWarning } from "react-icons/md";

export function TFA(props: OptionsProps){
    return(
        <>
            <SettingOptionDialogWrapper>
                <SettingOption title="Enable 2FA" onClick={() => props.handleDialogToggle('is2FAOpen', props.isDialogOpen)}>
                    <MdOutlineSystemSecurityUpdateWarning size={props.size} />                                
                </SettingOption>
                <Dialog isOpen={props.isDialogOpen} close={() => props.handleDialogToggle('is2FAOpen', props.isDialogOpen)} />
            </SettingOptionDialogWrapper>
        </>
    )
}