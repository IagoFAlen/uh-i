import { SettingOptionContainer } from "@/styles/pages/settings";
import { ComponentProps } from "react";

export interface SettingOptionProps extends ComponentProps<typeof SettingOptionContainer> {
    title: string
}