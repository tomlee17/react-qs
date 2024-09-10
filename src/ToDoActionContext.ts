import { createContext } from "react";

interface IToDoActionsContext {
    toggleToDo: (id: string, checked: boolean) => void;
    deleteToDo: (id: string) => void;
}

export const ToDoActionContext = createContext<IToDoActionsContext>({} as IToDoActionsContext);