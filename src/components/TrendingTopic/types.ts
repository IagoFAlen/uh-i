import { TopicContainer } from "@/styles/pages/trendingtopic";
import { ComponentProps } from "react";

export interface TrendingTopicProps extends ComponentProps<typeof TopicContainer> {
    title: string,
    quantity: string,
}