import { UserProfile } from "@/components/User/UserProfile";
import { HeaderLayout } from "@/layout/Header";
import { CommunityContent, CommunityProfiles } from "@/styles/pages/community";
import { LayoutContent } from "@/styles/pages/layout";

export default function Community(){
    return(
        <>
            <HeaderLayout />
            <LayoutContent>
                <CommunityProfiles>
                    <UserProfile />
                    <UserProfile />
                    <UserProfile />
                    <UserProfile />
                </CommunityProfiles>
            </LayoutContent>
        </>
    )

}