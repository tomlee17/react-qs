import { IToDo } from "./App";
import { ToDoItem } from "./ToDoItem";

interface ToDoListProps {
    toDos: IToDo[];
}

export function ToDoList({ toDos }: ToDoListProps) {
    return (
        <ul className="list">
            {toDos.length === 0 && "No To-dos"}
            {toDos.map((toDo) => {
                return (
                    <ToDoItem
                        {...toDo}
                        key={toDo.id}
                    />
                );
            })}
        </ul>
    );
}