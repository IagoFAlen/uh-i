import { TopicBox, TopicContainer, TopicHeadingContainer, TopicQuantityContainer } from "@/styles/pages/trendingtopic";
import { Box, Heading, Text } from "@bertiare-ui/react";
import { TrendingTopicProps } from "./types";

export function TrendingTopic(props: TrendingTopicProps){
    return(
        <>
            <TopicContainer>
                <Box>
                    <TopicBox>
                        <TopicHeadingContainer>
                            <Heading size="xsmall">{props.title}</Heading>
                        </TopicHeadingContainer>
                        <TopicQuantityContainer>
                            <Text size="xsmall">{props.quantity} posts</Text>
                        </TopicQuantityContainer>
                    </TopicBox>
                </Box>
            </TopicContainer>
        </>
    )
}