import { UserTab, UserTabMenu } from "@/styles/pages/user";
import { Heading } from "@bertiare-ui/react";

export function UserTabs(){
    return(
        <>
            <UserTabMenu>
                <UserTab variant="focus">
                    <Heading size="xxsmall">Uh-its</Heading>
                </UserTab>
                <UserTab>
                    <Heading size="xxsmall">Interactions</Heading>
                </UserTab>
                <UserTab>
                    <Heading size="xxsmall">Saves</Heading>
                </UserTab>
                <UserTab>
                    <Heading size="xxsmall">Likes</Heading>
                </UserTab>
            </UserTabMenu>
        </>
    )
}