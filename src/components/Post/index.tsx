import { ContentContainer, EllipsisText, PostContainer, ProfileContainer, ProfileInfo, SettingsContainer, SettingsIcon } from "@/styles/pages/post"
import { PostProps } from "./types"
import { Avatar, Box, Heading, Text } from "@bertiare-ui/react"
import { SlOptions } from "react-icons/sl";
import { PostInteraction } from "./PostInteraction";

export function Post(props: PostProps){
    return(
        <>
            <PostContainer>
                <Box>
                    <SettingsContainer> {/* onClick={toggleMenu}*/}
                        <SettingsIcon>
                            <SlOptions />
                        </SettingsIcon>
                    </SettingsContainer>

                    <ProfileContainer>
                        <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" />
                        <ProfileInfo>
                            <Heading size="xxsmall">Iago Figueira</Heading>
                            <Text size="xsmall">Brazil</Text>
                        </ProfileInfo>
                    </ProfileContainer>

                    <ContentContainer>
                        <Heading size="xsmall">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste ex reprehenderit accusamus?</Heading>
                        <EllipsisText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio officia eaque, laudantium commodi suscipit provident maiores consectetur ex iure, itaque iusto. Ipsa voluptates molestias molestiae? Ab ut laudantium aliquam.</EllipsisText>
                    </ContentContainer>

                    <PostInteraction />
                </Box>
            </PostContainer>
        </>
    )
}