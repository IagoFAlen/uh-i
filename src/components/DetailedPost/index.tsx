import { DetailedPostContainer } from "@/styles/pages/detailedpost";
import { ContentContainer, PostDetails, ProfileContainer, ProfileInfo, SettingsContainer, SettingsIcon, Time } from "@/styles/pages/post";
import { Avatar, Box, Heading, Text } from "@bertiare-ui/react";
import { SlOptions } from "react-icons/sl";
import { PostInteraction } from "../Post/PostInteraction";
import { Tags } from "../Tags";

export function DetailedPost(){
    return(
        <>
            <DetailedPostContainer>
                <Box>
                    <SettingsContainer> {/* onClick={toggleMenu}*/}
                        <SettingsIcon>
                            <SlOptions />
                        </SettingsIcon>
                    </SettingsContainer>
                    <PostDetails>
                        <ProfileContainer>
                            <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" />
                            <ProfileInfo>
                                <Heading size="xxsmall">Iago Figueira</Heading>
                                <Text size="xsmall">Brazil</Text>
                            </ProfileInfo>
                        </ProfileContainer>
                        <Time>
                            <Text size="small">10 min</Text>
                        </Time>
                    </PostDetails>

                    <ContentContainer>
                        <Heading size="xsmall">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste ex reprehenderit accusamus?</Heading>
                        <Text>Lorem ipsTextum dolor sit amet consectetur adipisicing elit. Rem distinctio officia eaque, laudantium commodi suscipit provident maiores consectetur ex iure, itaque iusto. Ipsa voluptates molestias molestiae? Ab ut laudantium aliquam.</Text>
                    </ContentContainer>
                    <Tags />
                    <PostInteraction />
                </Box>
            </DetailedPostContainer>
        </>
    )
}