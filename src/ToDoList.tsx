import { IToDo } from "./App";

interface ToDoListProps {
    toDos: IToDo[];
}

export function ToDoList({ toDos }: ToDoListProps) {
    return (
        <ul className="list">
            {toDos.length === 0 && "No To-dos"}
            {toDos.map((toDo) => {
                return (
                    <li key={toDo.id}>
                        <label>
                            <input type="checkbox"
                                checked={toDo.completed}
                            // onChange={e => toggleToDo(toDo.id, e.target.checked)}
                            />
                            {toDo.title}
                        </label>
                        <button
                            // onClick={() => deleteToDo(toDo.id)}
                            className="btn btn-danger">
                            Delete
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}