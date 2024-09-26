import { PublishContainer, PublishWrapper } from "@/styles/pages/home";
import { Box, Button, Heading } from "@bertiare-ui/react";
import { PostCreation } from "../Post/PostCreation";
import { AddPostToDo } from "@/styles/pages/postcreation";
import { CreateIcon } from "../CreateIcon";

export function CreatePost(){
    return(
        <>
        <PublishWrapper>
            <PublishContainer>
                <Box fit="28rem">
                    <PostCreation />
                    <AddPostToDo>
                        <Heading size="xxsmall">Add task</Heading>
                        <CreateIcon />
                    </AddPostToDo>
                    <Button variant="default" >Confirm</Button>
                </Box>
            </PublishContainer>
        </PublishWrapper>
        </>
    )

}