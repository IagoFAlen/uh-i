import { DiscardIconContainer } from "@/styles/pages/discardicon"
import { DiscardProps } from "./types"
import { FaRegTrashCan } from "react-icons/fa6"

export function DiscardIcon(props: DiscardProps){
    return(
        <>
            <DiscardIconContainer {...props}>
                <FaRegTrashCan />
            </DiscardIconContainer>        
        </>
    )
}