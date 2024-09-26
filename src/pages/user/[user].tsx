import { Feed } from "@/components/Feed";
import { UserProfile } from "@/components/User/UserProfile";
import { UserContainer } from "@/styles/pages/user";

export default function User(){
    return(
        <>
            <UserContainer>
                <UserProfile />                
                <Feed />
            </UserContainer>
        </>
    )
}