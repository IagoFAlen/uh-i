import { ButtonWrapper, FooterContainer, LogoContainer, MenuContainer, MenuSection, MenuSectionItem, MenuSectionList, MenuWrapper, SectionTitle } from "@/styles/pages/menu";
import { MenuProps } from "./types";
import { Tab } from "./Tab";
import { MdOutlineHome, MdOutlineTrendingUp, MdOutlineExplore, MdOutlinePeople, MdOutlineSettings } from "react-icons/md";
import { Avatar, Button, Heading, Text } from "@bertiare-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Navigate } from "@/styles/pages/navigation";

export function Menu(props: MenuProps){
    const baseTabs = ['home', 'trending', 'explore', 'community', 'write', 'settings']
    const router = useRouter()
    const [formatPathName, setFormatPathName] = useState<string>(router.pathname.replace('/', ''))
    const [unfocusedTabs, setUnfocusedTabs] = useState(baseTabs)

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            setFormatPathName(url.replace('/', ''))
        };

        router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        };
    }, [router.events])

    useEffect(() => {
        formatHomePathName()
        handleTabFocus(formatPathName)
    }, [formatPathName])

    function formatHomePathName() {
        if (formatPathName.length === 0) 
            setFormatPathName('home')
    }

    function handleTabFocus(tab: string) {
        const filteredTabs = baseTabs.filter((tabs) => tabs !== tab)
        setUnfocusedTabs(filteredTabs);
    }

    function isUnfocusedTab(tab: string) {
        return unfocusedTabs.includes(tab)
    }

    function focusTab(tab: string) {
        if (!isUnfocusedTab(tab)) 
            return 'focus'

        return undefined;
    }
    
    const size = 24

    return(
        <>
            <Navigate variant="fit" href="/">
                <LogoContainer>
                    <Heading decoration="highlight">UH-I</Heading>
                </LogoContainer>
            </Navigate>
            <MenuWrapper>
                <MenuContainer>
                    <MenuSectionList>
                        <MenuSectionItem>
                            <Navigate variant="fit" href="/">
                                <Tab title="Home" size="xsmall" variant={focusTab('home')} >
                                    <MdOutlineHome size={size}/>
                                </Tab>
                            </Navigate>
                        </MenuSectionItem>
                        <MenuSectionItem>
                            <Navigate variant="fit" href="/trending">
                                <Tab title="Trending" size="xsmall" variant={focusTab('trending')} >
                                    <MdOutlineTrendingUp size={size}/>
                                </Tab>
                            </Navigate>
                        </MenuSectionItem>
                        <MenuSectionItem>
                            <Navigate variant="fit" href="/explore">
                                <Tab title="Explore" size="xsmall" variant={focusTab('explore')} >
                                    <MdOutlineExplore size={size}/>
                                </Tab>
                            </Navigate>
                        </MenuSectionItem>
                        <MenuSectionItem>
                            <Navigate variant="fit" href="/community">
                                <Tab title="Community" size="xsmall" variant={focusTab('community')} >
                                    <MdOutlinePeople size={size}/>
                                </Tab>
                            </Navigate>
                        </MenuSectionItem>
                        <MenuSectionItem>
                            <Navigate variant="fit" href="/write">
                                <Tab title="Write" size="xsmall" variant={focusTab('write')} >
                                    <HiOutlinePencilSquare size={size}/>
                                </Tab>
                            </Navigate>
                        </MenuSectionItem>
                        <MenuSectionItem>
                            <Navigate variant="fit" href="/settings">
                                <Tab title="Settings" size="xsmall" variant={focusTab('settings')} >
                                    <MdOutlineSettings size={size}/>
                                </Tab>
                            </Navigate>
                        </MenuSectionItem>
                    </MenuSectionList>
                </MenuContainer>
                <MenuContainer>
                    <SectionTitle>
                        <Heading size="xsmall">Following</Heading>
                    </SectionTitle>
                    <MenuSectionList>
                        <MenuSectionItem>
                            <Tab title="Iago Figueira" size="xxsmall" variant="profile">
                                <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                            </Tab>
                        </MenuSectionItem>
                        <MenuSectionItem>
                            <Tab title="Iago Figueira" size="xxsmall" variant="profile">
                                <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                            </Tab>
                        </MenuSectionItem>
                        <MenuSectionItem>
                            <Tab title="Iago Figueira" size="xxsmall" variant="profile">
                                <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                            </Tab>
                        </MenuSectionItem>
                        <MenuSectionItem>
                            <Tab title="Iago Figueira" size="xxsmall" variant="profile">
                                <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                            </Tab>
                        </MenuSectionItem>
                        <ButtonWrapper>
                            <Button variant="default" fit="100%">Show more</Button>
                        </ButtonWrapper>
                    </MenuSectionList>
                </MenuContainer>
                <MenuContainer>
                    <SectionTitle>
                        <Heading size="xsmall">Followers</Heading>
                    </SectionTitle>
                    <MenuSectionList>
                    <MenuSectionItem>
                            <Tab title="Iago Figueira" size="xxsmall" variant="profile">
                                <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                            </Tab>
                        </MenuSectionItem>
                        <MenuSectionItem>
                            <Tab title="Iago Figueira" size="xxsmall" variant="profile">
                                <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                            </Tab>
                        </MenuSectionItem>
                        <MenuSectionItem>
                            <Tab title="Iago Figueira" size="xxsmall" variant="profile">
                                <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                            </Tab>
                        </MenuSectionItem>
                        <MenuSectionItem>
                            <Tab title="Iago Figueira" size="xxsmall" variant="profile">
                                <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="xsmall"/>
                            </Tab>
                        </MenuSectionItem>
                        <ButtonWrapper>
                            <Button variant="default" fit="100%">Show more</Button>
                        </ButtonWrapper>
                    </MenuSectionList>
                </MenuContainer>
                <FooterContainer>
                    <Text size="xsmall">A Bertiare-ui app</Text>
                </FooterContainer>
            </MenuWrapper>
        </>
    )
}