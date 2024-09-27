import { Feed } from "@/components/Feed";
import { UserProfile } from "@/components/User/UserProfile";
import { HeaderLayout } from "@/layout/Header";
import { UserContent } from "@/styles/pages/user";

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