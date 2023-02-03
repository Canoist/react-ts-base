import React from "react";
import { GitHubUser } from "types";
import styles from "./UserTitle.module.scss";

export interface IUserTitle
    extends Pick<GitHubUser, "created_at" | "login" | "name"> {}

const localDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
});

export const UserTitle = ({ created_at, login, name }: IUserTitle) => {
    const joinedDate = localDate.format(new Date(created_at));

    return (
        <div className={styles.userTitle}>
            <h2>{name}</h2>
            <h3>
                <a href={"https://github.com/" + login} target="blank">
                    @{login}
                </a>
            </h3>
            <span>Joined {joinedDate}</span>
        </div>
    );
};
