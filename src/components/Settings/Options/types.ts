import { DialogType } from "@/functions/Settings";
import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { ComponentProps } from "react";

export interface OptionsProps extends ComponentProps<typeof SettingOptionDialogWrapper> {
    size?: number,
    isDialogOpen: boolean,
    dialogIconSize?: number, 
    handleDialogToggle: (dialog: DialogType, isDialogOpen: boolean) => void
}