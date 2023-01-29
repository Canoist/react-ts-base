import React from "react";
import { ITodo } from "../types";

interface ITodoItem extends ITodo {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    onDelete: (id: number) => void;
    toggleCheck: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = ({
    id,
    title,
    completed,
    children,
    style = {},
    onDelete,
    toggleCheck,
}) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                placeholder="check"
                onChange={() => {
                    toggleCheck(id);
                }}
            />
            <span>{title}</span>
            <span onClick={() => onDelete(id)} className="delete">
                &times;
            </span>
            {children}
        </li>
    );
};

export default TodoItem;
