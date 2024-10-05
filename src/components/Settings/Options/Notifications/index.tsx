import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { SettingOption } from "../../SettingOption";
import { FaRegBell } from "react-icons/fa";
import { Dialog } from "@/layout/Dialog";
import { OptionsProps } from "../types";

export function Notifications(props: OptionsProps){
    return(
        <>
            <SettingOptionDialogWrapper>
                <SettingOption title="Notifications" onClick={() => props.handleDialogToggle('isNotificationsOpen', props.isDialogOpen )}>
                    <FaRegBell size={props.size} />                                
                </SettingOption>
                <Dialog isOpen={props.isDialogOpen} close={() => props.handleDialogToggle('isNotificationsOpen', props.isDialogOpen)} />
            </SettingOptionDialogWrapper>
        </>
    )
}