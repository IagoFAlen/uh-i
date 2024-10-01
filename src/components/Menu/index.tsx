import { ButtonWrapper, FooterContainer, LogoContainer, MenuContainer, MenuSection, MenuWrapper, SectionTitle } from "@/styles/pages/menu";
import { MenuProps } from "./types";
import { Tab } from "./Tab";
import { MdOutlineHome, MdOutlineTrendingUp, MdOutlineExplore, MdOutlinePeople } from "react-icons/md";
import { Avatar, Button, Heading, Text } from "@bertiare-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function Menu(props: MenuProps){
    const baseTabs = ['Home', 'Trending', 'Explore', 'Community']
    const router = useRouter()
    const [formatPathName, setFormatPathName] = useState<string>(router.pathname.replace('/', ''));
    
    console.log('Pathname: ', formatPathName)

    const [ unfocusedTabs, setUnfocusedTabs ] = useState(baseTabs)

    useEffect(() => {
        formatHomePathName()
        handleTabFocus(formatPathName)
    }, [formatPathName])
    
    function formatHomePathName(){
        if(formatPathName.length === 0)
            setFormatPathName('Home')
    }

    function handleTabFocus(tab: string){
        const filteredTabs = baseTabs.filter(tabs => tabs !== tab)
        setUnfocusedTabs(filteredTabs)
    }

    function isUnfocusedTab(tab: string){
        return unfocusedTabs.includes(tab)
    }

    function focusTab(tab: string){
        if(!(isUnfocusedTab(tab)))
            return 'focus'

        return undefined
    }

    const size = 28
    return(
        <>
            <LogoContainer>
                <Heading decoration="highlight">UH-I</Heading>
            </LogoContainer>
            <MenuWrapper>
                <MenuContainer>
                    <MenuSection>
                        <Tab title="Home" size="xsmall" variant={focusTab('Home')} >
                            <MdOutlineHome size={size}/>
                        </Tab>
                        <Tab title="Trending" size="xsmall" variant={focusTab('Trending')} >
                            <MdOutlineTrendingUp size={size}/>
                        </Tab>
                        <Tab title="Explore" size="xsmall" variant={focusTab('Explore')} >
                            <MdOutlineExplore size={size}/>
                        </Tab>
                        <Tab title="Community" size="xsmall" variant={focusTab('Community')} >
                            <MdOutlinePeople size={size}/>
                        </Tab>
                    </MenuSection>
                </MenuContainer>
                <MenuContainer>
                    <SectionTitle>
                        <Heading size="xsmall">Following</Heading>
                    </SectionTitle>
                    <MenuSection>
                        <Tab title="Iago Figueira" size="xxsmall" variant="profile">
                            <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                        </Tab>
                        <Tab title="Iago Figueira" size="xxsmall" variant="profile">
                            <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                        </Tab>
                        <Tab title="Iago Figueira" size="xxsmall" variant="profile">
                            <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                        </Tab>
                        <Tab title="Iago Figueira" size="xxsmall" variant="profile">
                            <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                        </Tab>
                        <ButtonWrapper>
                            <Button variant="default" fit="100%">Show more</Button>
                        </ButtonWrapper>
                    </MenuSection>
                </MenuContainer>
                <MenuContainer>
                    <SectionTitle>
                        <Heading size="xsmall">Followers</Heading>
                    </SectionTitle>
                    <MenuSection>
                        <Tab title="Iago Figueira" size="xxsmall" variant="profile">
                            <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                        </Tab>
                        <Tab title="Iago Figueira" size="xxsmall" variant="profile">
                            <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                        </Tab>
                        <Tab title="Iago Figueira" size="xxsmall" variant="profile">
                            <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                        </Tab>
                        <Tab title="Iago Figueira" size="xxsmall" variant="profile">
                            <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                        </Tab>
                        <ButtonWrapper>
                            <Button variant="default" fit="100%">Show more</Button>
                        </ButtonWrapper>
                    </MenuSection>
                </MenuContainer>
                <FooterContainer>
                    <Text size="xsmall">A Bertiare-ui app</Text>
                </FooterContainer>
            </MenuWrapper>
        </>
    )
}