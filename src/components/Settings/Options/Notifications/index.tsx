import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { SettingOption } from "../../SettingOption";
import { FaRegBell, FaBell } from "react-icons/fa";
import { Dialog } from "@/layout/Dialog";
import { OptionsProps } from "../types";
import { Heading, Switch, Text } from "@bertiare-ui/react";
import { NotificationsContainer } from "@/styles/pages/dialog/managenotifications";
import { useState } from "react";

export function Notifications(props: OptionsProps){
    const [ EmailNotificationController, setEmailNotificationController ] = useState(false)
    const [ PhoneNotificationController, setPhoneNotificationController ] = useState(false)

    function toggleNotification(type: string){
        switch(type){
            case 'EMAIL':
                setEmailNotificationController(!EmailNotificationController)
                break;
            case 'PHONE':
                setPhoneNotificationController(!PhoneNotificationController)
                break;
            default:
                return
        }
    }

    const dialogSize = 48
    return(
        <>
            <SettingOptionDialogWrapper>
                <SettingOption title="Notifications" onClick={() => props.handleDialogToggle('isNotificationsOpen', props.isDialogOpen )}>
                    <FaRegBell size={props.size} />                                
                </SettingOption>
                <Dialog isOpen={props.isDialogOpen} close={() => props.handleDialogToggle('isNotificationsOpen', props.isDialogOpen)}>
                    <NotificationsContainer>
                        <FaBell size={dialogSize}/>
                        <Heading size="small">Notifications</Heading>
                        <Text>Hi, seems you want to manage your notifications. You can do it over here:</Text>
                        <SettingOption title="E-mail" onClick={ () => toggleNotification('EMAIL') }>
                            <Switch size="small" active={EmailNotificationController} />
                        </SettingOption>
                        <SettingOption title="Phone" onClick={ () => toggleNotification('PHONE') }>
                            <Switch size="small" active={PhoneNotificationController} />
                        </SettingOption>
                    </NotificationsContainer>
                </Dialog>
            </SettingOptionDialogWrapper>
        </>
    )
}