import { FaGreaterThan } from "react-icons/fa";
import { keyframes, styled } from "..";

export const PostCreationContainer = styled('div', {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '$4',
})

export const PostCreationSectionWrapper = styled('div', {
    cursor: 'pointer',
})

export const PostCreationHeader = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
})

export const AddPostToDoContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
})

export const HandlerPostToDo = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: '$6',
})

export const ShortcutTaskContainer = styled('div', {
    padding: '$2',
    width: '100%',
    maxHeight: '70vh',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        backgroundColor: 'transparent',
        width: '3px',
    },

    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '$muted',
        borderRadius: '$lg'
    },
})