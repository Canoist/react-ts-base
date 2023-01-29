import React, { useRef } from "react";

interface IAddTodo {
    onClick: (text: string) => void;
}

const AddTodo: React.FC<IAddTodo> = ({ onClick }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef.current) {
            onClick(inputRef.current.value);
            inputRef.current.value = "";
        }
    };

    return (
        <>
            <input type="text" placeholder="new todo" ref={inputRef} />
            <button onClick={handleClick}>Add todo</button>
        </>
    );
};
export default AddTodo;
