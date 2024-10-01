import { CreatePost } from "@/components/CreatePost";
import { Feed } from "@/components/Feed";
import { HeaderLayout } from "@/layout/Header";
import { LayoutContent } from "@/styles/pages/layout";

export default function Home(){
    return(
        <>
            <HeaderLayout />
            <LayoutContent>
                <Feed />
                <CreatePost />
            </LayoutContent>
        </>
    )
}