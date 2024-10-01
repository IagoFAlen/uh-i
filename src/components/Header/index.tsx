import { HeaderBox } from "@/styles/pages/header";
import { HeaderProps } from "./types";
import { Avatar, Box, Search } from "@bertiare-ui/react";
import { ThemeChanger } from "../ThemeChanger";
import { useState } from "react";
import { Navigate } from "@/styles/pages/navigation";

export function Header(props: HeaderProps){
    const [ toggleSearch, setToggleSearch ] = useState<boolean>(true)

    const [ searchValue, setSearchValue ] = useState("")

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>){
        setSearchValue(event.target.value)
    }

    return(
        <>
            <Box variant="small">
                <HeaderBox>
                        <Navigate href="/user/Dealenc">
                            <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="medium"/>
                        </Navigate>
                        { toggleSearch && <Search placeholder="Search..." onChange={handleSearch} value={searchValue}/> }
                        <ThemeChanger />
                </HeaderBox>
            </Box>
        </>
    )
}