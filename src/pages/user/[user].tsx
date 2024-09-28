import { Feed } from "@/components/Feed";
import { UserProfile } from "@/components/User/UserProfile";
import { HeaderLayout } from "@/layout/Header";
import { LayoutContent } from "@/styles/pages/layout";
import { UserContent } from "@/styles/pages/user";

export default function User(){
    return(
        <>
            <HeaderLayout />
            <LayoutContent>
                <UserContent>
                    <UserProfile variant="personal"/>                
                    <Feed />
                </UserContent>
            </LayoutContent>
        </>
    )
}