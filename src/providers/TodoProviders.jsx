import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const initialTodoListState = ["Learn React Context API"];

const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState(initialTodoListState);

    const getNumberOfTodoItems = () => todoList.length;

    const addTodo = (newTodoItem) => {
        setTodoList(prevList => [...prevList, newTodoItem]);
    }

    const removeTodo = (todoIndex) => {
        setTodoList(prevList => prevList.filter((_, index) => index !== todoIndex));
    }

    const contextValue = {
        todoList,
        getNumberOfTodoItems,
        addTodo,
        removeTodo,
    }

    return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
}

export const useTodoContext = () => useContext(TodoContext);
export default TodoProvider;