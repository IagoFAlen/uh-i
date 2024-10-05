import { CloseContainer, CloseContainerWrapper, DialogBox, DialogContainer } from "@/styles/pages/dialog";
import { DialogProps } from "./types";
import { Heading, Text } from "@bertiare-ui/react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export function Dialog(props: DialogProps){
    const size = 16

    return(
        <>
            { props.isOpen && 
                <>
                    <DialogContainer>
                        <DialogBox>
                            <CloseContainerWrapper>
                                <CloseContainer onClick={ props.close }>
                                    <IoChevronBackOutline size={size}/>
                                    <Text>Back</Text>
                                </CloseContainer>
                            </CloseContainerWrapper>
                            { props.children }
                        </DialogBox>
                    </DialogContainer>    
                </>
            }
        </>
    )
}