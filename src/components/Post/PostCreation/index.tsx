import { PostCreationContainer, PostCreationHeader, PostCreationSectionWrapper, ShortcutTaskContainer } from "@/styles/pages/postcreation";
import { PostCreationProps } from "./types";
import { Heading, Input, TextArea } from "@bertiare-ui/react";
import { DiscardIcon } from "@/components/DiscardIcon";
import { Task } from "@/components/Task";
import { TaskHandler } from "@/components/Task/TaskHandler";
import { TaskArray, TaskArrayElements } from "@/styles/pages/task";
import { useReducer } from "react";
import { initialState, taskReducer } from "@/functions/Tasks";

export function PostCreation(props: PostCreationProps){
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

    return(
        <>
            <PostCreationContainer>
                <PostCreationHeader>
                    <PostCreationSectionWrapper>
                        <Heading size="small" decoration="highlight">Shortcut</Heading>
                    </PostCreationSectionWrapper>
                    <DiscardIcon />
                </PostCreationHeader>
                <ShortcutTaskContainer>
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
                </ShortcutTaskContainer>
            </PostCreationContainer>
        </>
    )
}