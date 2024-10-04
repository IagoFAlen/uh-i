import { SettingOptionWrapper, SettingSection, SettingSectionHeading, SettingsMenuContainer } from "@/styles/pages/settings";
import { SettingOption } from "./SettingOption";
import { Box, Heading, Switch } from "@bertiare-ui/react";
import { FaRegTrashCan } from "react-icons/fa6";
import { LiaUserSlashSolid } from "react-icons/lia";
import { MdLockOutline, MdOutlinePhoneEnabled, MdOutlineSecurity, MdOutlineSystemSecurityUpdateWarning } from "react-icons/md";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { PiCookieLight } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa";

export function SettingMenu(){
    // pegar as configurações da conta do usuário pela API
    const [ performanceCookie, setPerfomanceCookie ] = useState<boolean>(false)
    const [ optionalCookie, setOptionalCookie ] = useState<boolean>(false)

    function togglePerformanceCookie(){
        setPerfomanceCookie(!performanceCookie)
    }

    function toggleOptionalCookie(){
        setOptionalCookie(!optionalCookie)
    }

    const sectionIconSize = 26
    const size = 24

    return(
        <>
            <SettingsMenuContainer>
                <Box fit="100%" variant="large">
                    <SettingSection>
                    <SettingSectionHeading>
                            <AiOutlineUser size={ sectionIconSize }/>
                            <Heading size="small">Account</Heading>
                        </SettingSectionHeading>
                        <SettingOptionWrapper>
                            <SettingOption title="Notifications" >
                                <FaRegBell size={size}/>                                
                            </SettingOption>
                            <SettingOption title="Change password" >
                                <MdLockOutline size={size}/>                                
                            </SettingOption>
                            <SettingOption title="Change phone" >
                                <MdOutlinePhoneEnabled size={size}/>                                
                            </SettingOption>
                            <SettingOption title="Deactive account" color="danger">
                                <LiaUserSlashSolid size={size}/>                                
                            </SettingOption>
                            <SettingOption title="Delete account" color="danger">
                                <FaRegTrashCan size={size}/>                                
                            </SettingOption>
                        </SettingOptionWrapper>
                    </SettingSection>
                </Box>
                <Box fit="100%" variant="large">
                    <SettingSection>
                        <SettingSectionHeading>
                            <MdOutlineSecurity size={ sectionIconSize }/>
                            <Heading size="small">Security</Heading>
                        </SettingSectionHeading>
                        <SettingOptionWrapper>
                            <SettingOption title="Enable 2FA" >
                                <MdOutlineSystemSecurityUpdateWarning size={size}/>                                
                            </SettingOption>
                        </SettingOptionWrapper>
                    </SettingSection>
                </Box>
                <Box fit="100%" variant="large">
                    <SettingSection>
                        <SettingSectionHeading>
                            <PiCookieLight size={ sectionIconSize }/>
                            <Heading size="small">Cookies</Heading>
                        </SettingSectionHeading>
                        <SettingOptionWrapper>
                            <SettingOption title="Strictly neccessary">
                                <Switch size="small" active={ true }/>
                            </SettingOption>
                            <SettingOption title="Performance" onClick={ togglePerformanceCookie }>
                                <Switch size="small" active={performanceCookie}/>
                            </SettingOption>
                            <SettingOption title="Optional" onClick={ toggleOptionalCookie }>
                                <Switch size="small" active={optionalCookie}/>
                            </SettingOption>
                        </SettingOptionWrapper>
                    </SettingSection>
                </Box>
            </SettingsMenuContainer>
        </>
    )
}