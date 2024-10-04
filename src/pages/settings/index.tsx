import { SettingMenu } from "@/components/Settings";
import { HeaderLayout } from "@/layout/Header";
import { LayoutContent } from "@/styles/pages/layout";

export default function Settings(){
    return(
        <>
            <HeaderLayout />
            <LayoutContent>
                <SettingMenu />
            </LayoutContent>
        </>
    )
}