import { useEffect, useState } from "react";
import "./styles.css"
import { NewToDoForm } from "./NewToDoForm";
import { ToDoList } from "./ToDoList";
import { ToDoActionContext } from "./ToDoActionContext";

export interface IToDo {
  id: string,
  title: string,
  completed: boolean,
}

export function App() {
  const [to_dos, setToDos] = useState<IToDo[]>(() => {
    const local_saved_todos = localStorage.getItem("toDoItems");

    return local_saved_todos ? JSON.parse(local_saved_todos) : [];
  });

  useEffect(() => {
    localStorage.setItem("toDoItems", JSON.stringify(to_dos));
  }, [to_dos]);

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
      <ToDoActionContext.Provider value={{ toggleToDo, deleteToDo }}>
        <ToDoList toDos={to_dos} />
      </ToDoActionContext.Provider>
    </>
  );
}

