import { Post } from "@/components/Post"
import { FeedContainer, HomeContainer, PostSection, PublishContainer, PublishWrapper } from "@/styles/pages/home"
import { Box, Button, Heading, Input, TextArea } from "@bertiare-ui/react"

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
                        <Box fit="30rem">
                            <Heading size="xxsmall">Write</Heading>
                            <Input placeholder="Insert a title"/>
                            <TextArea fit="100%" placeholder="Type the content"/>
                            <Button variant="default" >Post</Button>
                        </Box>
                    </PublishContainer>
                </PublishWrapper>
            </HomeContainer>
        </>
    )
}