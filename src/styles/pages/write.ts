import { styled } from "..";

export const WriteContainer = styled('div', {
    width: '40rem',
})

export const WriteForm = styled('form', {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
    flexDirection: 'column',
    gap: '$4',
})

export const WriteLabel = styled('label', {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'start',
    flexDirection: 'column',
    width: '100%',
})

export const WriteHeadingWrapper = styled('div', {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '$2',
})

export const WriteButtonWrapper = styled('div', {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    gap: '$4',
    width: '100%',
})

export const WriteTaskToDo = styled('div', {
    display: 'flex',
})
