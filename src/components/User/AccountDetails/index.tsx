import { AccountDetailsCommunity, AccountDetailsContainer, Bio, Data } from "@/styles/pages/user";
import { Heading, Text } from "@bertiare-ui/react";

export function AccountDetails(){
    return(
        <>
            <AccountDetailsContainer>
                <AccountDetailsCommunity>
                    <Data>
                        <Heading size="xxsmall">90</Heading>
                        <Text size="small">Following</Text>
                    </Data>

                    <Data>
                        <Heading size="xxsmall">34.232</Heading>
                        <Text size="small">Followers</Text>
                    </Data>

                    <Data>
                        <Heading size="xxsmall">3</Heading>
                        <Text size="small">Posts</Text>
                    </Data>
                </AccountDetailsCommunity>
                <Bio>
                    <Text>Flamengo, Hacking and Full Stack Dev</Text>
                </Bio>
            </AccountDetailsContainer>  
        </>
    )
}