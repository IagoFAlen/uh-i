import { LayoutAlignContainer, LayoutContainer } from "@/styles/pages/layout";
import { PageProps } from "./types";

export function PageLayout(props: PageProps){
    return(
        <>
            <LayoutContainer>
                <LayoutAlignContainer>
                    {props.children}
                </LayoutAlignContainer>
            </LayoutContainer>
        </>
    )
}