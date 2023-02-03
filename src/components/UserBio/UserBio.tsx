import React from "react";
import { GitHubUser } from "types";
import styles from "./UserBio.module.scss";

interface IUserBio extends Pick<GitHubUser, "bio"> {}

export const UserBio = ({ bio }: IUserBio) => (
    <p className={styles.userBio + bio ? "" : ` ${styles.empty}`}>
        {bio || "This profile has no bio"}
    </p>
);
