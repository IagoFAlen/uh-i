import { HeaderBox } from "@/styles/pages/header";
import { HeaderProps } from "./types";
import { Avatar, Box, Search } from "@bertiare-ui/react";
import { ThemeChanger } from "../ThemeChanger";
import { useState } from "react";
import { Navigate } from "@/styles/pages/navigation";
import { AvatarWrapper } from "@/styles/pages/avatar";

export function Header(props: HeaderProps){
    // useContext pra pegar o usuário em vez de props

    const [ toggleSearch, setToggleSearch ] = useState<boolean>(true)

    const [ searchValue, setSearchValue ] = useState("")

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>){
        setSearchValue(event.target.value)
    }

    return(
        <>
            <Box variant="small">
                <HeaderBox>

                    { props.user ? (
                            <Navigate href="/user/Dealenc">
                                <Avatar src="https://i.pinimg.com/564x/05/e0/a1/05e0a17973cecac91653c194269f4253.jpg" size="medium"/>
                            </Navigate>
                        ): (
                            <Navigate href="/login">
                                <AvatarWrapper>
                                    <Avatar size="xxsmall"/>
                                </AvatarWrapper>
                            </Navigate>   
                        )
                    }
                        { toggleSearch && <Search placeholder="Search..." onChange={handleSearch} value={searchValue}/> }
                        <ThemeChanger />
                </HeaderBox>
            </Box>
        </>
    )
}