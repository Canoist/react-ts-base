import { UserAvatar } from "components/UserAvatar";
import { UserBio } from "components/UserBio";
import { UserStat } from "components/UserStat";
import { UserTitle } from "components/UserTitle";
import React from "react";
import { GitHubUser } from "types";
import styles from "./UserCard.module.scss";

interface IUserCard extends GitHubUser {}

export const UserCard = (props: IUserCard) => {
    return (
        <div className={styles.userCard}>
            <UserAvatar login={props.login} avatar_url={props.avatar_url} />
            <UserTitle
                created_at={props.created_at}
                login={props.login}
                name={props.name}
            />
            <UserBio bio={props.bio} />
            <UserStat
                public_repos={props.public_repos}
                followers={props.followers}
                following={props.following}
            />
        </div>
    );
};
