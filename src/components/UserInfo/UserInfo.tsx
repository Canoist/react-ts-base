import { ReactComponent as CompanyIcon } from "assets/icon-company.svg";
import { ReactComponent as LocationIcon } from "assets/icon-location.svg";
import { ReactComponent as TwitterIcon } from "assets/icon-twitter.svg";
import { ReactComponent as BlogIcon } from "assets/icon-website.svg";
import { IUserInfoItem, UserInfoItem } from "components/UserInfoItem";
import React from "react";
import { GitHubUser } from "types";
import styles from "./UserInfo.module.scss";

interface IUserInfo
    extends Pick<
        GitHubUser,
        "blog" | "company" | "location" | "twitter_username"
    > {}

export const UserInfo = ({
    blog,
    company,
    location,
    twitter_username,
}: IUserInfo) => {
    const items: IUserInfoItem[] = [
        {
            icon: <LocationIcon />,
            text: location,
        },
        {
            icon: <BlogIcon />,
            text: blog,
            isLink: true,
        },
        {
            icon: <TwitterIcon />,
            text: twitter_username,
        },
        {
            icon: <CompanyIcon />,
            text: company,
        },
    ];

    return (
        <div className={styles.userInfo}>
            {items.map((item, index) => (
                <UserInfoItem {...item} key={index} />
            ))}
        </div>
    );
};
