import { PostCreationContainer, PostCreationHeader, PostCreationSectionWrapper } from "@/styles/pages/postcreation";
import { PostCreationProps } from "./types";
import { Heading, Input, TextArea } from "@bertiare-ui/react";
import { DiscardIcon } from "@/components/DiscardIcon";
import { AddTask } from "@/components/Task/AddTask";

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
                <Input placeholder="Insert a title" fit="100%"/>
                <TextArea placeholder="Type the content" fit="100%"/>
                <AddTask />
            </PostCreationContainer>
        </>
    )
}