import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import { ITodo } from "./types";

function App() {
    const [text, setText] = useState<string>("");
    const [todos, setTodos] = useState<ITodo[]>([]);

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setText(target.value);
    };

    const createTodo = () => {
        const newTodo: ITodo = {
            completed: false,
            id: Date.now(),
            title: text,
        };
        setTodos([newTodo, ...todos]);
        setText("");
    };

    return (
        <div className="App">
            <AddTodo
                value={text}
                onChange={handleChange}
                onClick={createTodo}
            />
            {todos.map((todo: ITodo) => (
                <TodoItem
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    style={{ border: "1px solid black" }}
                />
            ))}
        </div>
    );
}

export default App;
