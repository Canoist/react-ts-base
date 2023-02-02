import React from "react";
import { GitHubUser } from "types";
import styles from "./UserStat.module.scss";

interface IUserStat
    extends Pick<GitHubUser, "following" | "followers" | "public_repos"> {}

export const UserStat = ({ public_repos, followers, following }: IUserStat) => (
    <div className={styles.userStat}>
        <div className={styles.styleInfo}>
            <div className={styles.infoTitle}>Repos</div>
            <div className={styles.infoNumber}>{public_repos}</div>
        </div>
        <div className={styles.styleInfo}>
            <div className={styles.infoTitle}>Followers</div>
            <div className={styles.infoNumber}>{followers}</div>
        </div>
        <div className={styles.styleInfo}>
            <div className={styles.infoTitle}>Following</div>
            <div className={styles.infoNumber}>{following}</div>
        </div>
    </div>
);
