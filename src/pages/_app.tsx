import { AppProps } from "next/app";
import { globalStyles } from "@/styles/global";
import { darkTheme, lightTheme } from "@bertiare-ui/react";
import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "@/styles/pages/theming/themeprovider";
import { AppContainer, AsideBox, AsideContainer, AsideWrapper, HeaderContainer, HeaderWrapper, MainContainer } from "@/styles/pages/app";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";

globalStyles()

const ThemeProps = lightTheme

export interface ThemesContextTypes {
  changeTheme: (theme: string) => void
}

export const ThemesContext = createContext({} as ThemesContextTypes)

export default function App({ Component, pageProps }: AppProps){
    const [ theme, setTheme ] = useState<string>('light-theme')
    const [ newTheme, setNewTheme ] = useState<typeof ThemeProps>(lightTheme)
  
    function changeTheme( theme: string ){
      setTheme(theme)
    }
  
    useEffect(() => {
      switch(theme){
        case 'light-theme':
          setNewTheme(lightTheme)
          break
        case 'dark-theme':
          setNewTheme(darkTheme)
          break
        default:
          setNewTheme(lightTheme)
      }
    }, [ theme ])

    return(
        <>
            <ThemesContext.Provider value={{ changeTheme }}>
                <ThemeProvider className={newTheme}>
                    <AppContainer>
                      <AsideWrapper>
                        <AsideContainer>
                            <AsideBox>
                              <Menu />
                            </AsideBox>
                        </AsideContainer>
                      </AsideWrapper>
                      <HeaderWrapper>
                        <HeaderContainer>
                            <Header />
                        </HeaderContainer>
                      </HeaderWrapper>
                        <MainContainer>
                            <Component {...pageProps} />
                        </MainContainer>
                    </AppContainer>
                </ThemeProvider>
            </ThemesContext.Provider>
        </>
    )
}