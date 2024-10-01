
import { Task } from "@/components/Task";
import { AddTask } from "@/components/Task/AddTask";
import { HeaderLayout } from "@/layout/Header";
import { LayoutContent } from "@/styles/pages/layout";
import { WriteButtonWrapper, WriteContainer, WriteForm } from "@/styles/pages/write";
import { Box, Button, Heading } from "@bertiare-ui/react";

export default function Write(){
    return(
        <>
            <HeaderLayout />
            <LayoutContent>
                <WriteContainer>
                    <Box>

                        <Heading decoration="highlight" size="medium">Write</Heading>
                        <WriteForm>
                            <Task />
                            <AddTask />
                            <Task />
                            <WriteButtonWrapper>
                                <Button variant="danger" fit="100%">Discard</Button>
                                <Button variant="default" fit="100%">Confirm</Button>
                            </WriteButtonWrapper>
                        </WriteForm>
                    </Box>
                </WriteContainer>
            </LayoutContent>
        </>
    )
}