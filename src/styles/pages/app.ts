import { Box } from "@bertiare-ui/react";
import { styled } from "..";

export const AppContainer = styled('div', {
    display: 'grid',
    gridTemplateAreas: `
                            'aside header '
                            'aside main '
                        `,
    minHeight: '100vh',
    backgroundColor: '$appBackground',
    color: '$text',
})


export const AsideWrapper = styled('div', {
    gridArea: 'aside',
    position: 'relative',
    
})

export const AsideContainer = styled('aside', {
    position: 'fixed',
})

export const AsideBox = styled(Box, {
    padding: '$4',
})

export const HeaderWrapper = styled('div', {
    gridArea: 'header',
    position: 'relative',
})

export const HeaderContainer = styled('header', {
    position: 'fixed',


})

export const MainContainer = styled('main', {
    gridArea: 'main',
    paddingTop: '$30',
})