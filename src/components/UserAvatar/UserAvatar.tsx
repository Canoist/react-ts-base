import React from "react";
import { GitHubUser } from "types";
import styles from "./UserAvatar.module.scss";

interface IUserAvatar extends Pick<GitHubUser, "avatar_url" | "login"> {}

export const UserAvatar = ({ avatar_url, login }: IUserAvatar) => (
    <img className={styles.userAvatar} alt={login} src={avatar_url} />
);
