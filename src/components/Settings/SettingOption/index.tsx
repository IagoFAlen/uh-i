import { SettingOptionContainer } from "@/styles/pages/settings";
import { SettingOptionProps } from "./types";
import { Heading, Text } from "@bertiare-ui/react";

export function SettingOption(props: SettingOptionProps){
    return(
        <>
            <SettingOptionContainer {...props}>
                <Heading size="xxsmall">{ props.title }</Heading>
                { props.children }
            </SettingOptionContainer>
        </>
    )
}