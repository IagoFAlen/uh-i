import { FooterContainer, LogoContainer, MenuContainer, MenuSection, MenuWrapper, SectionTitle } from "@/styles/pages/menu";
import { MenuProps } from "./types";
import { Tab } from "./Tab";
import { MdOutlineHome, MdOutlineTrendingUp, MdOutlineExplore, MdOutlinePeople } from "react-icons/md";
import { Avatar, Button, Heading, Text } from "@bertiare-ui/react";

export function Menu(props: MenuProps){
    const size = 28
    return(
        <>
            <LogoContainer>
                <Heading>UH-I</Heading>
            </LogoContainer>

            <MenuWrapper>
                <MenuContainer>
                    <MenuSection>
                        <Tab title="Home" size="xsmall">
                            <MdOutlineHome size={size}/>
                        </Tab>
                        <Tab title="Trending" size="xsmall">
                            <MdOutlineTrendingUp size={size}/>
                        </Tab>
                        <Tab title="Explore" size="xsmall">
                            <MdOutlineExplore size={size}/>
                        </Tab>
                        <Tab title="Community" size="xsmall">
                            <MdOutlinePeople size={size}/>
                        </Tab>
                    </MenuSection>
                </MenuContainer>
                <MenuContainer>
                    <SectionTitle>
                        <Heading size="xsmall">Following</Heading>
                    </SectionTitle>
                    <MenuSection>
                        <Tab title="Iago Figueira" size="xxsmall">
                            <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                        </Tab>
                        <Tab title="Iago Figueira" size="xxsmall">
                            <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                        </Tab>
                        <Tab title="Iago Figueira" size="xxsmall">
                            <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                        </Tab>
                        <Tab title="Iago Figueira" size="xxsmall">
                            <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                        </Tab>
                        <Button variant="default" fit="100%">Show more</Button>
                    </MenuSection>
                </MenuContainer>
                <MenuContainer>
                    <SectionTitle>
                        <Heading size="xsmall">Followers</Heading>
                    </SectionTitle>
                    <MenuSection>
                        <Tab title="Iago Figueira" size="xxsmall">
                            <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                        </Tab>
                        <Tab title="Iago Figueira" size="xxsmall">
                            <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                        </Tab>
                        <Tab title="Iago Figueira" size="xxsmall">
                            <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                        </Tab>
                        <Tab title="Iago Figueira" size="xxsmall">
                            <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                        </Tab>
                        <Button variant="default" fit="100%">Show more</Button>
                    </MenuSection>
                </MenuContainer>
                <FooterContainer>
                    <Heading size="xxsmall">A Bertiare-ui application</Heading>
                </FooterContainer>
            </MenuWrapper>
        </>
    )
}