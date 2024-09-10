import { IToDo } from "./App";
import { ToDoItem } from "./ToDoItem";

interface ToDoListProps {
    toDos: IToDo[];
    toggleToDo: (id: string, checked: boolean) => void;
    deleteToDo: (id: string) => void;
}

export function ToDoList({ toDos, toggleToDo, deleteToDo }: ToDoListProps) {
    return (
        <ul className="list">
            {toDos.length === 0 && "No To-dos"}
            {toDos.map((toDo) => {
                return (
                    <ToDoItem
                        {...toDo}
                        key={toDo.id}
                        toggleToDo={toggleToDo}
                        deleteToDo={deleteToDo}
                    />
                );
            })}
        </ul>
    );
}