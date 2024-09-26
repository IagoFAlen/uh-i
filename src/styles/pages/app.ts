import { Box } from "@bertiare-ui/react";
import { styled } from "..";

export const AppContainer = styled('div', {
    display: 'grid',
    gridTemplateAreas: `
                            'aside main'
                            'aside main'
                        `,
    gridTemplateColumns: '18rem auto',
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


export const MainContainer = styled('main', {
    gridArea: 'main',
})

