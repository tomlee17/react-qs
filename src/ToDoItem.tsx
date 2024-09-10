import { IToDo } from "./App";

interface IToDoItemProps extends IToDo {
    toggleToDo: (id: string, checked: boolean) => void;
    deleteToDo: (id: string) => void;
}

export function ToDoItem({ id, completed, title, toggleToDo, deleteToDo }: IToDoItemProps) {

    return (
        <li>
            <label>
                <input type="checkbox"
                    checked={completed}
                    onChange={e => toggleToDo(id, e.target.checked)}
                />
                {title}
            </label>
            <button
                onClick={() => deleteToDo(id)}
                className="btn btn-danger">
                Delete
            </button>
        </li>
    );
}