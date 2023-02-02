import React from "react";
import styles from "./UserStat.module.scss";

interface IUserStat {}

export const UserStat = ({}: IUserStat) => (
    <div className={styles.userStat}>UserStat</div>
);
