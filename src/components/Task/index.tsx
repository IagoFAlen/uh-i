import { WriteHeadingWrapper, WriteLabel } from "@/styles/pages/write";
import { Heading, Input, TextArea } from "@bertiare-ui/react";
import { DiscardIcon } from "../DiscardIcon";

interface TaskProps {
    isElement?: boolean;
    task: { title: string; content: string };
    onTaskChange: (key: 'title' | 'content', value: string) => void;
    onRemove: () => void;
    isMainTask?: boolean;
}

  
export function Task({ task, onTaskChange, onRemove, isElement = false }: TaskProps){

    function handleOnTitleTaskChange(event: React.ChangeEvent<HTMLInputElement>){
        onTaskChange('title', event.target.value)
    }

    function handleOnContentTaskChange(event: React.ChangeEvent<HTMLTextAreaElement>){
        onTaskChange('content', event.target.value)
    }

    return(
        <>
            <WriteLabel>
                <WriteHeadingWrapper>
                    <Heading size="minimum">Title</Heading>
                    { isElement && <DiscardIcon onClick={() => { console.log('Remove Task Clicked!'); onRemove(); }} /> }
                </WriteHeadingWrapper>
                <Input fit="100%" placeholder="Write your heading title here" value={task.title} onChange={handleOnTitleTaskChange} />
            </WriteLabel>
            <WriteLabel>
                <WriteHeadingWrapper>
                    <Heading size="minimum">Content</Heading>
                </WriteHeadingWrapper>
                <TextArea fit="100%" placeholder="Write your content description here" value={task.content} onChange={handleOnContentTaskChange} />
            </WriteLabel>
        </>
    )
}