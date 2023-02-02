import { UserStatInfo } from "components/UserStatInfo";
import React from "react";
import { GitHubUser } from "types";
import styles from "./UserStat.module.scss";

export interface IUserStat
    extends Pick<GitHubUser, "following" | "followers" | "public_repos"> {}

export const UserStat = ({ public_repos, followers, following }: IUserStat) => (
    <div className={styles.userStat}>
        <UserStatInfo title="Repos" count={public_repos} />
        <UserStatInfo title="Followers" count={followers} />
        <UserStatInfo title="Following" count={following} />
    </div>
);
