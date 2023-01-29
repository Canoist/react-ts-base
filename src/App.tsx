import React, { DetailedHTMLProps, useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import { ITodo } from "./types";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data: ITodo[]) => {
                setTodos(data);
            });
    }, []);

    const createTodo = (text: string) => {
        const newTodo: ITodo = {
            completed: false,
            id: Date.now(),
            title: text,
        };
        setTodos([newTodo, ...todos]);
    };

    const handleChangeCheck = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id !== id ? todo : { ...todo, completed: !todo.completed }
            )
        );
    };

    const handleDelete = (id: number): void => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    };

    return (
        <div className="App">
            <AddTodo onClick={createTodo} />
            <TodoList
                todos={todos}
                onDelete={handleDelete}
                toggleCheck={handleChangeCheck}
            />
        </div>
    );
}

export default App;
