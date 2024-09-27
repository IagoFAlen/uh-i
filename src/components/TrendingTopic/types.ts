import { TopicContainer } from "@/styles/pages/trendingtopic";
import { ComponentProps } from "react";

export interface TrendingTopic extends ComponentProps<typeof TopicContainer> {
    title: string,
    quantity: string,
}