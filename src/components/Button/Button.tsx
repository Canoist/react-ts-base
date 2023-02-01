import React from "react";
import styles from "./Button.module.scss";

interface IButton {
    content: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({ content, onClick, type = undefined }: IButton) => (
    <button className={styles.button} onClick={onClick} type={type}>
        {content}
    </button>
);
