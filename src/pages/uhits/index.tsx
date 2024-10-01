import { DetailedPost } from "@/components/DetailedPost";
import { Post } from "@/components/Post";
import { HeaderLayout } from "@/layout/Header";
import { RatingBoxWrapper, RatingContainer } from "@/styles/pages/uhits";
import { Box, Heading, ProgressBar } from "@bertiare-ui/react";


export default function Uhits(){
    return(
        <>
            <HeaderLayout />
            <RatingContainer>
                <DetailedPost />
                <Box>
                    <RatingBoxWrapper>
                        <Heading size="small">Status</Heading>
                        <ProgressBar progressNumber={100} title="rating"/>
                    </RatingBoxWrapper>
                </Box>
            </RatingContainer>
        </>
    )
}