import { PostCreationContainer, PostCreationHeader } from "@/styles/pages/postcreation";
import { PostCreationProps } from "./types";
import { Heading, Input, TextArea } from "@bertiare-ui/react";
import { DiscardIcon } from "@/components/DiscardIcon";

export function PostCreation(props: PostCreationProps){
    return(
        <>
            <PostCreationContainer>
                <PostCreationHeader>
                    <Heading size="small">Post</Heading>
                    <DiscardIcon />
                </PostCreationHeader>
                <Input placeholder="Insert a title" fit="100%"/>
                <TextArea placeholder="Type the content" fit="100%"/>
            </PostCreationContainer>
        </>
    )
}