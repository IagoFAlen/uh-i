import { MenuContainer, MenuSection, MenuWrapper, SectionTitle } from "@/styles/pages/menu";
import { MenuProps } from "./types";
import { Tab } from "./Tab";
import { MdOutlineHome, MdOutlineTrendingUp, MdOutlineExplore, MdOutlinePeople } from "react-icons/md";
import { Heading } from "@bertiare-ui/react";

export function Menu(props: MenuProps){
    const size = 24
    return(
        <>
            <MenuWrapper>
                <MenuContainer>
                    <MenuSection>
                        <Tab title="Home" >
                            <MdOutlineHome size={size}/>
                        </Tab>
                        <Tab title="Trending">
                            <MdOutlineTrendingUp size={size}/>
                        </Tab>
                        <Tab title="Explore">
                            <MdOutlineExplore size={size}/>
                        </Tab>
                        <Tab title="Community">
                            <MdOutlinePeople size={size}/>
                        </Tab>
                    </MenuSection>
                </MenuContainer>
                <MenuContainer>
                    <SectionTitle>
                        <Heading size="xxsmall">Following</Heading>
                    </SectionTitle>
                    <MenuSection>
                        <Tab title="Home" >
                            <MdOutlineHome size={size}/>
                        </Tab>
                        <Tab title="Trending">
                            <MdOutlineTrendingUp size={size}/>
                        </Tab>
                        <Tab title="Explore">
                            <MdOutlineExplore size={size}/>
                        </Tab>
                        <Tab title="Community">
                            <MdOutlinePeople size={size}/>
                        </Tab>
                    </MenuSection>
                </MenuContainer>
                <MenuContainer>
                    <SectionTitle>
                        <Heading size="xxsmall">Followers</Heading>
                    </SectionTitle>
                    <MenuSection>
                        <Tab title="Home" >
                            <MdOutlineHome size={size}/>
                        </Tab>
                        <Tab title="Trending">
                            <MdOutlineTrendingUp size={size}/>
                        </Tab>
                        <Tab title="Explore">
                            <MdOutlineExplore size={size}/>
                        </Tab>
                        <Tab title="Community">
                            <MdOutlinePeople size={size}/>
                        </Tab>
                    </MenuSection>
                </MenuContainer>
            </MenuWrapper>
        </>
    )
}