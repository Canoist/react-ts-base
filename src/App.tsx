import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
    return (
        <div className="App">
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
