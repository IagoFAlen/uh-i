import { UserProfileContainer } from "@/styles/pages/user";
import { ComponentProps } from "react";

export interface UserProfileProps extends ComponentProps<typeof UserProfileContainer> {
    variant?: 'personal',
}