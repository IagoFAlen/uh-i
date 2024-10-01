import { CreatePost } from "@/components/CreatePost";
import { Feed } from "@/components/Feed";
import { HeaderLayout } from "@/layout/Header";
import { ExploreContent } from "@/styles/pages/explore";
import { LayoutContent } from "@/styles/pages/layout";

export default function Explore(){
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