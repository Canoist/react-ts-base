import { IUserStat, UserStat } from "components/UserStat";
import { IUserTitle, UserTitle } from "components/UserTitle";
import React from "react";
import styles from "./UserCard.module.scss";

interface IUserCard extends IUserStat, IUserTitle {}

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
