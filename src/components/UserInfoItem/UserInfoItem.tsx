import React from "react";
import styles from "./UserInfoItem.module.scss";

export interface IUserInfoItem {
    icon: React.ReactNode;
    text?: string | null;
    isLink?: boolean;
}

export const UserInfoItem = ({ icon, isLink, text }: IUserInfoItem) => {
    const currentText = text || "Not Available";
    let currentHref = "";

    if (isLink) {
        currentHref =
            text && text.startsWith("http") ? text : `https://${text}`;
    }

    return (
        <div
            className={`${styles.userInfoItem}${
                text ? "" : ` ${styles.empty}`
            }`}>
            {icon}
            <div>
                {isLink && text ? (
                    <a
                        href={currentHref}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.link}>
                        {currentText}
                    </a>
                ) : (
                    currentText
                )}
            </div>
        </div>
    );
};
