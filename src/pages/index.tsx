import { CreateIcon } from "@/components/CreateIcon"
import { CreatePost } from "@/components/CreatePost"
import { Feed } from "@/components/Feed"
import { HomeContainer } from "@/styles/pages/home"

export default function Home(){
    return(
        <>
            <HomeContainer>
                <Feed />
                <CreatePost />
            </HomeContainer>
        </>
    )
}