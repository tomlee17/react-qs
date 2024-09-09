import { FormEventHandler, useState } from "react";

interface INewToDoFormProps {
    addToDo: (newItemTitle: string) => void;
}

export function NewToDoForm({ addToDo }: INewToDoFormProps) {

    const [new_item, setNewItem] = useState("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (new_item === "") { return; }

        addToDo(new_item);

        setNewItem("");
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value={new_item}
                    onChange={e => setNewItem(e.target.value)}
                    type="text" id="item"
                />
            </div>
            <button className="btn">Add</button>
        </form>
    );
}