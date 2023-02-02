import React from "react";
import styles from "./UserStatInfo.module.scss";

interface IUserStatInfo {
    title: string;
    count: number;
}

export const UserStatInfo = ({ title, count }: IUserStatInfo) => (
    <div className={styles.info}>
        <div className={styles.infoTitle}>{title}</div>
        <div className={styles.infoNumber}>{count}</div>
    </div>
);
