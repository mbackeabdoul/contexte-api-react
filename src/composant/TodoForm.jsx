import { useState } from "react";
import { useTodoContext } from "../providers/TodoProviders";

const TodoForm = () => {
    const { getNumberOfTodoItems, addTodo } = useTodoContext();
    const [todoItem, setTodoItem] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (todoItem.trim() !== "") {
            addTodo(todoItem.trim());
            setTodoItem("");
        }
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <h3>Number of todo items: {getNumberOfTodoItems()}</h3>
            <input 
                type="text" 
                value={todoItem}
                onChange={(e) => setTodoItem(e.target.value)}
                placeholder="Enter a new todo item"
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default TodoForm;