import { Task } from "@/components/Task";
import { TaskHandler } from "@/components/Task/TaskHandler";
import { initialState, taskReducer } from "@/functions/Tasks";
import { HeaderLayout } from "@/layout/Header";
import { LayoutContent } from "@/styles/pages/layout";
import { TaskArray, TaskArrayElements } from "@/styles/pages/task";
import { WriteButtonWrapper, WriteContainer, WriteForm } from "@/styles/pages/write";
import { Box, Button, Heading } from "@bertiare-ui/react";
import { useReducer } from "react";

export default function Write() {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    // Handlers for main title and content
    function handleMainTaskChange(key: 'title' | 'content', value: string) {
        dispatch({ type: key === "title" ? "SET_MAIN_TITLE" : "SET_MAIN_CONTENT", payload: value });
    }

    // Handlers for task updates
    function handleTaskChange(index: number, key: 'title' | 'content', value: string) {
        dispatch({ type: "UPDATE_TASK", index, key, value });
    }

    // Handlers for adding and removing tasks
    function handleAddTask() {
        dispatch({ type: "ADD_TASK" });
    }

    function handleRemoveTask(index: number) {
        dispatch({ type: "REMOVE_TASK", index });
    }

    console.log(state)
    return (
        <>
            <HeaderLayout />
            <LayoutContent>
                <WriteContainer>
                    <Box>
                        <Heading decoration="highlight" size="medium">Write</Heading>
                        <WriteForm>
                            <Task task={state.main} onTaskChange={handleMainTaskChange} onRemove={() => {}}/>                            
                            
                            <TaskHandler add={handleAddTask} remove={() => handleRemoveTask(state.tasks.length - 1)} />

                            <TaskArray>
                                {state.tasks.map((task, index) => (
                                    <TaskArrayElements key={index}>
                                        <Task
                                            task={task}
                                            onTaskChange={(key, value) => handleTaskChange(index, key, value)}
                                            onRemove={() => handleRemoveTask(index)}
                                            isElement
                                        />
                                    </TaskArrayElements>
                                ))}
                            </TaskArray>

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
