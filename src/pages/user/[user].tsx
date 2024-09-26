import { Feed } from "@/components/Feed";
import { UserProfile } from "@/components/User/UserProfile";
import { HeaderLayout } from "@/layout/Header";
import { UserAlignContainer, UserContainer, UserContent } from "@/styles/pages/user";

export default function User(){
    return(
        <>
            <HeaderLayout />
            <UserContent>
                <UserProfile />                
                <Feed />
            </UserContent>
        </>
    )
}