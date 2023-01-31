import React from "react";
import styles from "./Container.module.scss";

interface IContainer {
    children: React.ReactNode;
}

export const Container = ({ children }: IContainer) => (
    <div className={styles.container}>
        {children}
    </div>
);
