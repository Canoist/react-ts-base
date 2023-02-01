import { ReactComponent as SearchIcon } from "assets/search-icon.svg";
import React, { useRef } from "react";
import { GitHubResError } from "types";
import styles from "./Search.module.scss";

interface ISearch {
    error: GitHubResError;
    onSubmit: (text: string) => void;
}

export const Search = ({ error, onSubmit }: ISearch) => {
    const searchRef = useRef<HTMLFormElement | null>(null);

    const handleSubmit = (event: React.FormEvent) => {};

    return (
        <form
            className={styles.search}
            ref={searchRef}
            onSubmit={() => handleSubmit}
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
            Search
        </form>
    );
};
