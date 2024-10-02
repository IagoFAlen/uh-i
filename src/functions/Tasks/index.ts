export interface TaskState {
    main: { title: string; content: string }; // Default task
    tasks: Array<{ title: string; content: string }>; // Array for additional tasks
}


export type TaskAction =
    | { type: 'SET_MAIN_TITLE'; payload: string }
    | { type: 'SET_MAIN_CONTENT'; payload: string }
    | { type: 'ADD_TASK' }
    | { type: 'REMOVE_TASK'; index: number }
    | { type: 'UPDATE_TASK'; index: number; key: 'title' | 'content'; value: string };


export const initialState: TaskState = {
    main: { title: "", content: "" }, // Main title and content
    tasks: [], // Additional tasks
};

export function taskReducer(state: TaskState, action: TaskAction) {
    switch (action.type) {
        case "SET_MAIN_TITLE":
            return { ...state, main: { ...state.main, title: action.payload } };
        case "SET_MAIN_CONTENT":
            return { ...state, main: { ...state.main, content: action.payload } };
        case "ADD_TASK":
            return { ...state, tasks: [...state.tasks, { title: "", content: "" }] };
        case "UPDATE_TASK":
            const updatedTasks = state.tasks.map((task, index) =>
                index === action.index ? { ...task, [action.key]: action.value } : task
            );
            return { ...state, tasks: updatedTasks };
        case "REMOVE_TASK":
            const filteredTasks = state.tasks.filter((_, index) => index !== action.index);
            return { ...state, tasks: filteredTasks };
        default:
            return state;
    }
}
