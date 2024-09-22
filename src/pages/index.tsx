import { Post } from "@/components/Post"
import { FeedContainer } from "@/styles/pages/home"

export default function Home(){
    return(
        <>
            <FeedContainer>
                <Post />
                <Post />
                <Post />
            </FeedContainer>
        </>
    )
}