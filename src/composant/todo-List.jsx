import { useTodoContext } from "../providers/TodoProviders"

const TodoList = () => {
    const { todoList, removeTodo } = useTodoContext();
    return (
        <ul>
           {todoList.map((todo, index) => (
            <li key={index}>
                {todo}
                <button onClick={() => removeTodo(index)}>X</button>
            </li>
           ))}
        </ul>
    )
}

export default TodoList;
