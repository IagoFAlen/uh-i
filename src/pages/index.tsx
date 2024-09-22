import { CreateIcon } from "@/components/CreateIcon"
import { DiscardIcon } from "@/components/DiscardIcon"
import { Post } from "@/components/Post"
import { PostCreation } from "@/components/Post/PostCreation"
import { FeedContainer, HomeContainer, PostSection, PublishContainer, PublishWrapper } from "@/styles/pages/home"
import { AddPostToDo, PostCreationHeader } from "@/styles/pages/postcreation"
import { Box, Button, Heading } from "@bertiare-ui/react"

export default function Home(){
    return(
        <>
            <HomeContainer>
                <FeedContainer>
                    <Post />
                    <Post />
                    <Post />
                </FeedContainer>
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
            </HomeContainer>
        </>
    )
}