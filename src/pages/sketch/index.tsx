import { PostSettingMenu } from "@/components/Post/PostSettingMenu";
import { HeaderLayout } from "@/layout/Header";
import { LayoutContent } from "@/styles/pages/layout";

export default function Sketch(){
    return(
        <>
            <HeaderLayout />
            <LayoutContent>
                <PostSettingMenu />
            </LayoutContent>
        </>
    )
}