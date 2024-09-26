import { Header } from "@/components/Header";
import { HeaderContainer, HeaderWrapper } from "@/styles/pages/header";

export function HeaderLayout(){
    return(
        <>
            <HeaderWrapper>
                <HeaderContainer>
                    <Header />
                </HeaderContainer>
            </HeaderWrapper>
        </>
    )
}