import { CreateIcon } from "@/components/CreateIcon";
import { DiscardIcon } from "@/components/DiscardIcon";
import { HandlerPostToDo } from "@/styles/pages/postcreation";
import { TaskInteraction } from "@/styles/pages/task";
import { Heading } from "@bertiare-ui/react";

interface TaskHandlerProps {
    add: () => void;
    remove: () => void;
}

export function TaskHandler({ add, remove }: TaskHandlerProps) {
    return (
        <>
            <HandlerPostToDo>
                <Heading size="xxsmall">Tasks</Heading>
                <TaskInteraction>
                    <CreateIcon onClick={() => { console.log('Add Task Clicked!'); add(); }} />
                    <DiscardIcon onClick={() => { console.log('Remove Task Clicked!'); remove(); }} />
                </TaskInteraction>
            </HandlerPostToDo>
        </>
    );
}
