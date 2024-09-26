import { AppProps } from "next/app";
import { globalStyles } from "@/styles/global";
import { darkTheme, lightTheme } from "@bertiare-ui/react";
import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "@/styles/pages/theming/themeprovider";
import { AppContainer, MainContainer } from "@/styles/pages/app";
import { Header } from "@/components/Header";
import { AsideLayout } from "@/layout/Aside";
import { HeaderLayout } from "@/layout/Header";

globalStyles();

export interface ThemesContextTypes {
  changeTheme: (theme: string) => void;
}



export const ThemesContext = createContext({} as ThemesContextTypes);

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>("light-theme");
  const [currentTheme, setCurrentTheme] = useState<typeof lightTheme | typeof darkTheme>(lightTheme);
  const [isHydrated, setIsHydrated] = useState(false);


  function handleTheme(theme: string) {
    switch (theme) {
      case "light-theme":
        localStorage.setItem("theme", "light-theme");
        break;
      case "dark-theme":
        localStorage.setItem("theme", "dark-theme");
        break;
      default:
        localStorage.setItem("theme", "light-theme");
        break;
      
    }
  }

  function changeTheme(theme: string) {
    setTheme(theme);
  }

  useEffect(() => {
    if (typeof window !== "undefined" && !isHydrated) {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
      }
      setIsHydrated(true);
    }
  }, [isHydrated]);

  useEffect(() => {
    if (typeof window !== "undefined" && isHydrated) {
      handleTheme(theme);
      setCurrentTheme(theme === "dark-theme" ? darkTheme : lightTheme);
    }
  }, [theme, isHydrated]);

  return (
    <ThemesContext.Provider value={{ changeTheme }}>
      <ThemeProvider className={currentTheme}>
        <AppContainer>
          <AsideLayout />
          <HeaderLayout />
          <MainContainer>
            <Component {...pageProps} />
          </MainContainer>
        </AppContainer>
      </ThemeProvider>
    </ThemesContext.Provider>
  );
}
