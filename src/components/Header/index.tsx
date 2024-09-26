import { HeaderBox } from "@/styles/pages/header";
import { HeaderProps } from "./types";
import { Avatar, Box, Search } from "@bertiare-ui/react";
import { ThemeChanger } from "../ThemeChanger";
import { useState } from "react";

export function Header(props: HeaderProps){
    const [ toggleSearch, setToggleSearch ] = useState<boolean>(true)

    return(
        <>
            <Box variant="small">
                <HeaderBox>
                        <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="medium"/>
                        { toggleSearch && <Search placeholder="Search..."/> }
                        <ThemeChanger />
                </HeaderBox>
            </Box>
        </>
    )
}