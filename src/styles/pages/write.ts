import { styled } from "..";

export const WriteContainer = styled('div', {
    width: '40rem',
})

export const WriteForm = styled('form', {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
    flexDirection: 'column',
    gap: '$2',
})

export const WriteLabel = styled('label', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    flexDirection: 'column',
    width: '100%',
})

export const WriteSectionTitleWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '$2 0',

})

export const WriteHeadingWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '$2',
})

export const WriteButtonWrapper = styled('div', {
    paddingTop: '$8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$4',
    width: '100%',
})

export const WriteTaskToDo = styled('div', {
    display: 'flex',
})
