import { TabContainer } from "@/styles/pages/tab";
import { ComponentProps } from "react";

export interface TabProps extends ComponentProps<typeof TabContainer> {
    title: string,
    size?: "large" | "medium" | "small" | "xsmall" | "xxsmall",
    variant?: 'focus',
}