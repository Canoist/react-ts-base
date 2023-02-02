import { IUserStat, UserStat } from "components/UserStat";
import React from "react";
import styles from "./UserCard.module.scss";

interface IUserCard extends IUserStat {}

export const UserCard = ({ public_repos, followers, following }: IUserCard) => {
    return (
        <div className={styles.userCard}>
            <UserStat
                public_repos={public_repos}
                followers={followers}
                following={following}
            />
        </div>
    );
};
