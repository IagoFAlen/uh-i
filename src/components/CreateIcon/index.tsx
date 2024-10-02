import { CreateIconContainer } from "@/styles/pages/createicon";
import { CreateIconProps } from "./types";
import { FaPlus } from "react-icons/fa6";

export function CreateIcon(props: CreateIconProps){
    return(
        <>
            <CreateIconContainer {...props}>
                <FaPlus />
            </CreateIconContainer>
        </>
    )
}