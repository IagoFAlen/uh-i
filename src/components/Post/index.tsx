import { ContentContainer, EllipsisText, PostContainer, PostDetails, ProfileContainer, ProfileInfo, SettingsContainer, SettingsIcon, Time } from "@/styles/pages/post"
import { PostProps } from "./types"
import { Avatar, Box, Heading, Text } from "@bertiare-ui/react"
import { SlOptions } from "react-icons/sl";
import { PostInteraction } from "./PostInteraction";
import { PostSettingMenu } from "./PostSettingMenu";
import { useEffect, useState } from "react";
import { Tags } from "../Tags";
import { Navigate } from "@/styles/pages/navigation";

export function Post(props: PostProps){
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)

    function toggleMenu(){
        setIsMenuOpen(!isMenuOpen)
    }

    const settingConfigs = {
        mute: false,
        block: false,
        hide: false,
    }

    useEffect(() => {
        isMenuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

        return () => {
            document.body.style.overflow = 'auto'
        }

    }, [isMenuOpen])


    return(
        <>
            <PostContainer>
                <Box>
                    <SettingsContainer> {/* onClick={toggleMenu}*/}
                        <SettingsIcon onClick={toggleMenu}>
                            <SlOptions />
                        </SettingsIcon>
                        { isMenuOpen && <PostSettingMenu configs={settingConfigs} toggleMenu={toggleMenu}/> }

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

                    <Navigate href="/uhits/adb938d4e201e922ea39fb7615be4b7f">
                        <ContentContainer>
                            <Heading size="xsmall">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste ex reprehenderit accusamus?</Heading>
                            <EllipsisText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio officia eaque, laudantium commodi suscipit provident maiores consectetur ex iure, itaque iusto. Ipsa voluptates molestias molestiae? Ab ut laudantium aliquam.</EllipsisText>
                        </ContentContainer>
                    </Navigate>

                    <Tags />
                    <PostInteraction />
                </Box>
            </PostContainer>
        </>
    )
}