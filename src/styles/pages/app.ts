import { Box } from "@bertiare-ui/react";
import { styled } from "..";

export const AppContainer = styled('div', {
    display: 'grid',
    gridTemplateAreas: `
                            'aside header'
                            'aside main'
                        `,
    gridTemplateColumns: '18rem auto',
    gridTemplateRows: '5rem auto',
    minHeight: '100vh',
    backgroundColor: '$appBackground',
    color: '$text',
    
})

export const AsideContainer = styled('aside', {
    gridArea: 'aside',
    position: 'fixed',
})

export const AsideBox = styled(Box, {
    padding: '$4',
})

export const HeaderContainer = styled('header', {
    gridArea: 'header',
    position: 'fixed',
    justifySelf: 'center',
})

export const MainContainer = styled('main', {
    gridArea: 'main',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
})