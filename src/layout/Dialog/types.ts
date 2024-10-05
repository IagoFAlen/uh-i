import { DialogContainer } from "@/styles/pages/dialog";
import { ComponentProps } from "react";

export interface DialogProps extends ComponentProps<typeof DialogContainer>{
    isOpen: boolean,
    close: () => void
}