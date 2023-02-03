import { UserStat } from "components/UserStat";
import { UserTitle } from "components/UserTitle";
import React from "react";
import { GitHubUser } from "types";
import styles from "./UserCard.module.scss";

interface IUserCard extends GitHubUser {}

export const UserCard = ({
    public_repos,
    followers,
    following,
    created_at,
    login,
    name,
}: IUserCard) => {
    return (
        <div className={styles.userCard}>
            <UserTitle created_at={created_at} login={login} name={name} />
            <UserStat
                public_repos={public_repos}
                followers={followers}
                following={following}
            />
        </div>
    );
};
