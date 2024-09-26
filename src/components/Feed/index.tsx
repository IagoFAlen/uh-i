import { FeedContainer } from "@/styles/pages/feed";
import { Post } from "../Post";

export function Feed(){
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