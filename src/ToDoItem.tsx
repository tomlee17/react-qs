import { useContext } from "react";
import { IToDo } from "./App";
import { ToDoActionContext } from "./ToDoActionContext";

interface IToDoItemProps extends IToDo {

}

export function ToDoItem({ id, completed, title }: IToDoItemProps) {
    const { toggleToDo, deleteToDo } = useContext(ToDoActionContext);

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