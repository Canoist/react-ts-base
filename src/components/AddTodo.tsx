import React from "react";

interface IAddTodo {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

const AddTodo: React.FC<IAddTodo> = ({ value, onChange, onClick }) => {
    return (
        <>
            <input
                type="text"
                placeholder="new todo"
                value={value}
                onChange={onChange}
            />
            <button onClick={onClick}>Add todo</button>
        </>
    );
};
export default AddTodo;
