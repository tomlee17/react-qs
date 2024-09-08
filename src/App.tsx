import { useState } from "react";
import "./styles.css"
import { NewToDoForm } from "./NewToDoForm";

export function App() {
  interface IToDo {
    id: string,
    title: string,
    completed: boolean,
  }

  const [to_dos, setToDos] = useState<IToDo[]>([]);

  function addToDo(newItemTitle: string) {

    setToDos((currToDos) => {
      return [
        ...currToDos,
        { id: crypto.randomUUID(), title: newItemTitle, completed: false }
      ]
    });
  }

  function toggleToDo(id: string, completed: boolean) {

    setToDos(currToDos => {
      return currToDos.map(toDo => {
        if (toDo.id === id) {
          return { ...toDo, completed };
        }

        return toDo;
      });
    });
  }

  function deleteToDo(id: string) {

    setToDos(currToDos => {
      return currToDos.filter(toDo => {
        return toDo.id !== id;
      });
    });
  }

  return (
    <>
      <NewToDoForm addToDo={addToDo} />
      <h1 className="header">To-do List</h1>
      <ul className="list">
        {to_dos.length === 0 && "No To-dos"}
        {to_dos.map((toDo) => {

          return <li key={toDo.id}>
            <label>
              <input type="checkbox" checked={toDo.completed}
                onChange={e => toggleToDo(toDo.id, e.target.checked)}
              />
              {toDo.title}
            </label>
            <button onClick={() => deleteToDo(toDo.id)} className="btn btn-danger">Delete</button>
          </li>
        })}

      </ul>
    </>
  );
}

