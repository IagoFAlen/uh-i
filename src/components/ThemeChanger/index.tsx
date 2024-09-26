import { ThemeChangerContainer } from "@/styles/pages/themechanger";
import { ThemeChangerProps } from "./types";
import { useContext, useEffect, useState } from "react";
import { ToggleTheme } from "@bertiare-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemesContext } from "@/pages/_app";


export function ThemeChanger(props: ThemeChangerProps){
    const [ darkTheme, setDarkTheme ] = useState<boolean>(false)
    const { changeTheme } = useContext(ThemesContext)
    
    function toggleTheme(){
        setDarkTheme(!darkTheme)
    }
    
    useEffect(() => {
        setDarkTheme(localStorage.getItem("theme") === "dark-theme");
    }, []);
    
    useEffect(() => {
        darkTheme ? changeTheme('dark-theme') : changeTheme('light-theme')
    }, [darkTheme])
    
    return(
        <>
            <ThemeChangerContainer>
                <ToggleTheme onClick={ toggleTheme }>
                    {
                        darkTheme ? <FiMoon /> : <FiSun />
                    }
                </ToggleTheme>
            </ThemeChangerContainer>
        </>
    )
}