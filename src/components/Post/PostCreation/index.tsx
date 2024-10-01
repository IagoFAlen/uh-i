import { PostCreationContainer, PostCreationHeader, PostCreationSectionWrapper } from "@/styles/pages/postcreation";
import { PostCreationProps } from "./types";
import { Heading, Input, TextArea } from "@bertiare-ui/react";
import { DiscardIcon } from "@/components/DiscardIcon";
import { AddTask } from "@/components/Task/AddTask";
import { Task } from "@/components/Task";

export function PostCreation(props: PostCreationProps){
    return(
        <>
            <PostCreationContainer>
                <PostCreationHeader>
                    <PostCreationSectionWrapper>
                        <Heading size="small" decoration="highlight">Post</Heading>
                    </PostCreationSectionWrapper>
                    <DiscardIcon />
                </PostCreationHeader>
                <Task />
                <AddTask />
            </PostCreationContainer>
        </>
    )
}