import { CreateIcon } from "@/components/CreateIcon";
import { DiscardIcon } from "@/components/DiscardIcon";
import { AddPostToDo } from "@/styles/pages/postcreation";
import { TaskInteraction } from "@/styles/pages/task";
import { Heading } from "@bertiare-ui/react";

export function AddTask(){
    return(
        <>
            <AddPostToDo>
                <Heading size="xxsmall">Add task</Heading>
                <TaskInteraction>
                    <CreateIcon />
                    <DiscardIcon />
                </TaskInteraction>
            </AddPostToDo>
        </>
    )
}