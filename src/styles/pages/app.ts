import { Box } from "@bertiare-ui/react";
import { styled } from "..";

export const AppContainer = styled('div', {
    display: 'grid',
    gridTemplateAreas: `
                            'header header header'
                            'aside main main'
                        `,

    width: '100%',
    minHeight: '100vh',
    backgroundColor: '$appBackground',
    color: '$text',
})


export const AsideWrapper = styled('div', {
    gridArea: 'aside',
    position: 'relative',
    marginTop: '$16',
})

export const AsideContainer = styled('aside', {
    position: 'fixed',
    width: '20%',
    background: '$background',
})

export const AsideBox = styled(Box, {
    padding: '0 0 0 $4',
})

export const HeaderWrapper = styled('div', {
    gridArea: 'header',
    position: 'relative',
})

export const HeaderContainer = styled('header', {
    position: 'fixed',
    width: '100%',
})

export const MainContainer = styled('main', {
    gridArea: 'main',
    paddingTop: '$20',
    alignContent: 'center',
    justifySelf: 'start',
})