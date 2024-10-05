import { DialogType } from "@/functions/Settings";
import { SettingOptionDialogWrapper } from "@/styles/pages/settings";
import { ComponentProps } from "react";

export interface ChangePasswordProps extends ComponentProps<typeof SettingOptionDialogWrapper> {
    size: number,
    isDialogOpen: boolean,
    handleDialogToggle: (dialog: DialogType, isDialogOpen: boolean) => void
}