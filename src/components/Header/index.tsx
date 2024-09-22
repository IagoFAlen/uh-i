import { HeaderContainer } from "@/styles/pages/header";
import { HeaderProps } from "./types";
import { Avatar, Search } from "@bertiare-ui/react";
import { ThemeChanger } from "../ThemeChanger";
import { useState } from "react";

export function Header(props: HeaderProps){
    const [ toggleSearch, setToggleSearch ] = useState<boolean>(true)

    return(
        <>
            <HeaderContainer>
                <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="small"/>
                { toggleSearch && <Search fit="30%" placeholder="Search..."/> }
                <ThemeChanger />
            </HeaderContainer>
        </>
    )
}