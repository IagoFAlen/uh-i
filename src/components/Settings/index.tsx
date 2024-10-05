import { SettingOptionDialogWrapper, SettingOptionWrapper, SettingSection, SettingSectionHeading, SettingsMenuContainer } from "@/styles/pages/settings";
import { SettingOption } from "./SettingOption";
import { Box, Heading, Switch } from "@bertiare-ui/react";
import { FaRegTrashCan } from "react-icons/fa6";
import { LiaUserSlashSolid } from "react-icons/lia";
import { MdLockOutline, MdOutlinePhoneEnabled, MdOutlineSecurity, MdOutlineSystemSecurityUpdateWarning } from "react-icons/md";
import { useReducer, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { PiCookieLight } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa";
import { Dialog } from "@/layout/Dialog";
import { DialogType, initialState, settingDialogsReducer } from "@/functions/Settings";
import { Notifications } from "./Options/Notifications";
import { ChangePassword } from "./Options/ChangePassword";
import { ChangePhone } from "./Options/ChangePhone";
import { DeactivateAccount } from "./Options/DeactivateAccount";
import { DeleteAccount } from "./Options/DeleteAccount";
import { TFA } from "./Options/TFA";

export function SettingMenu(){

    const [state, dispatch] = useReducer(settingDialogsReducer, initialState);
    const { 
        isNotificationsOpen, 
        isChangePasswordOpen, 
        isChangePhoneOpen, 
        isDeactivateAccountOpen, 
        isDeleteAccountOpen, 
        is2FAOpen 
    } = state;

    // pegar as configurações da conta do usuário pela API
    const [ performanceCookie, setPerfomanceCookie ] = useState<boolean>(false)
    const [ optionalCookie, setOptionalCookie ] = useState<boolean>(false)

    function togglePerformanceCookie(){
        setPerfomanceCookie(!performanceCookie)
    }

    function toggleOptionalCookie(){
        setOptionalCookie(!optionalCookie)
    }

    const handleDialogToggle = (dialog: DialogType, isOpen: boolean) => {
        dispatch({ type: isOpen ? 'CLOSE_DIALOG' : 'OPEN_DIALOG', dialog });
    };

    const sectionIconSize = 26
    const size = 24

    return(
        <>
            <SettingsMenuContainer>
                <Box fit="100%" variant="large">
                    <SettingSection>
                        <SettingSectionHeading>
                            <AiOutlineUser size={ sectionIconSize } />
                            <Heading size="small">Account</Heading>
                        </SettingSectionHeading>
                        <SettingOptionWrapper>
                            <Notifications size={size} handleDialogToggle={ () => handleDialogToggle('isNotificationsOpen', isNotificationsOpen) } isDialogOpen={ isNotificationsOpen }/>
                            <ChangePassword size={size} handleDialogToggle={ () => handleDialogToggle('isChangePasswordOpen', isChangePasswordOpen) } isDialogOpen={ isChangePasswordOpen }/>
                            <ChangePhone size={size} handleDialogToggle={ () => handleDialogToggle('isChangePhoneOpen', isChangePhoneOpen) } isDialogOpen={ isChangePhoneOpen }/>
                            <DeactivateAccount size={size} handleDialogToggle={ () => handleDialogToggle('isDeactivateAccountOpen', isDeactivateAccountOpen) } isDialogOpen={ isDeactivateAccountOpen }/>
                            <DeleteAccount size={size} handleDialogToggle={ () => handleDialogToggle('isDeleteAccountOpen', isDeleteAccountOpen) } isDialogOpen={ isDeleteAccountOpen }/>
                        </SettingOptionWrapper>
                    </SettingSection>
                </Box>
                <Box fit="100%" variant="large">
                    <SettingSection>
                        <SettingSectionHeading>
                            <PiCookieLight size={ sectionIconSize } />
                            <Heading size="small">Cookies</Heading>
                        </SettingSectionHeading>
                        <SettingOptionWrapper>
                            <SettingOption title="Strictly necessary">
                                <Switch size="small" active={true} />
                            </SettingOption>
                            <SettingOption title="Performance" onClick={togglePerformanceCookie}>
                                <Switch size="small" active={performanceCookie} />
                            </SettingOption>
                            <SettingOption title="Optional" onClick={toggleOptionalCookie}>
                                <Switch size="small" active={optionalCookie} />
                            </SettingOption>
                        </SettingOptionWrapper>
                    </SettingSection>
                </Box>
                <Box fit="100%" variant="large">
                    <SettingSection>
                        <SettingSectionHeading>
                            <MdOutlineSecurity size={sectionIconSize} />
                            <Heading size="small">Security</Heading>
                        </SettingSectionHeading>
                        <SettingOptionWrapper>
                            <TFA size={size} handleDialogToggle={ () => handleDialogToggle('is2FAOpen', is2FAOpen) } isDialogOpen={ is2FAOpen }/>
                        </SettingOptionWrapper>
                    </SettingSection>
                </Box>
            </SettingsMenuContainer>
        </>
    )
}