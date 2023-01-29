import React from "react";
import { ITodo } from "../types";
import TodoItem from "./TodoItem";

interface ITodoList {
    todos: ITodo[];
    onDelete: (id: number) => void;
    toggleCheck: (id: number) => void;
}

const TodoList: React.FC<ITodoList> = ({ todos, onDelete, toggleCheck }) => {
    return (
        <ul>
            {todos.map((todo: ITodo) => (
                <TodoItem
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    style={{ border: "1px solid black" }}
                    onDelete={onDelete}
                    key={todo.id}
                    toggleCheck={toggleCheck}
                />
            ))}
        </ul>
    );
};
export default TodoList;
