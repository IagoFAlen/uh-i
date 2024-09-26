import { Menu } from "@/components/Menu";
import { AsideBox, AsideContainer } from "@/styles/pages/app";

export function AsideLayout(){
    return(
        <>
            <AsideContainer>
                <AsideBox>
                    <Menu />
                </AsideBox>
            </AsideContainer>
        </>
    )
}