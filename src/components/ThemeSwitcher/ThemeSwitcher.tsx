import { ReactComponent as IconMoon } from "assets/icon-moon.svg";
import { ReactComponent as IconSun } from "assets/icon-sun.svg";
import React, { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
    const [isDark, setIsDark] = useState<boolean>(false);
    const textContent = isDark ? "Dark" : "Light";
    const ThemeIcon = isDark ? IconMoon : IconSun;

    useEffect(() => {
        document.body.setAttribute("data-theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <div className={styles.switcher} onClick={() => setIsDark(!isDark)}>
            <span>{textContent}</span>
            <ThemeIcon className={styles.icon} />
        </div>
    );
};
