import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import { Button } from "components/Button";
import React from "react";
import { GitHubResError } from "types";
import styles from "./Search.module.scss";

interface ISearch {
    error: GitHubResError;
    onSubmit: (text: string) => void;
}

interface FormFields {
    username: HTMLInputElement;
}

export const Search = ({ error, onSubmit }: ISearch) => {
    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement & FormFields>
    ) => {
        event.preventDefault();
        const text = event.currentTarget.username.value;
        if (text) {
            onSubmit(text);
            event.currentTarget.reset();
        }
    };

    return (
        <form
            className={styles.search}
            onSubmit={handleSubmit}
            autoComplete="off">
            <label htmlFor="search" className={styles.label}>
                <SearchIcon />
            </label>
            <input
                type="text"
                className={styles.textField}
                id="search"
                name="username"
                placeholder="Search GitHub username..."
            />
            {!!error && <div className={styles.error}>{error.message}</div>}
            <Button content="Search" />
        </form>
    );
};
