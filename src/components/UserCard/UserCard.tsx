import React from "react";
import styles from "./UserCard.module.scss";

interface IUserCard {}

export const UserCard = ({}: IUserCard) => (
    <div className={styles.userCard}>UserCard</div>
);
