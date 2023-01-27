import React from "react";

interface ITodoItem {
    id: string;
    title: string;
    completed: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

const TodoItem: React.FC<ITodoItem> = ({
    id,
    title,
    completed,
    children,
    style = {},
}) => {
    return (
        <li>
            <input type="checkbox" checked={completed} placeholder="check" />
            <span>{title}</span>
            <span>&times;</span>
            {children}
        </li>
    );
};

export default TodoItem;
