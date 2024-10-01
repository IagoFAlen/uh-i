import { PublishContainer, PublishWrapper } from "@/styles/pages/home";
import { Box, Button, Heading } from "@bertiare-ui/react";
import { PostCreation } from "../Post/PostCreation";

export function CreatePost(){
    return(
        <>
        <PublishWrapper>
            <PublishContainer>
                <Box fit="28rem">
                    <PostCreation />
                    <Button variant="default" >Confirm</Button>
                </Box>
            </PublishContainer>
        </PublishWrapper>
        </>
    )

}