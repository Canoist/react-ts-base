import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

function App() {
    const [text, setText] = useState<string>("");
    const [todos, setTodos] = useState<string[]>([""]);

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setText(target.value);
    };

    const createTodo = () => {
        setTodos([text, ...todos]);
        setText("");
    };

    return (
        <div className="App">
            <AddTodo
                value={text}
                onChange={handleChange}
                onClick={createTodo}
            />
            <TodoItem
                id="123"
                title="Title"
                completed={true}
                style={{ border: "1px solid black" }}
            />
        </div>
    );
}

export default App;
