import { ThemeSwitcher } from "components/ThemeSwitcher";
import React from "react";
import styles from "./Header.module.scss";

export const Header = () => (
    <div className={styles.header}>
        <div className={styles.logo}>DevFinder</div>
        <ThemeSwitcher />
    </div>
);
