import { CreateIcon } from "@/components/CreateIcon"
import { CreatePost } from "@/components/CreatePost"
import { Feed } from "@/components/Feed"
import { HeaderLayout } from "@/layout/Header"
import { HomeAlignContainer, HomeContainer, HomeContent } from "@/styles/pages/home"

export default function Home(){
    return(
        <>
            <HeaderLayout />
            <HomeContent>
                <Feed />
                <CreatePost />
            </HomeContent>
        </>
    )
}