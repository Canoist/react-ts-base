import React from "react";
import styles from "./Header.module.scss";

interface IHeader {}

export const Header = ({}: IHeader) => (
    <div className={styles.Header}>
        Header Component
    </div>
);
