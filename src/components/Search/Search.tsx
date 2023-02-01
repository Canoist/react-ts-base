import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import { Button } from "components/Button";
import React, { useRef } from "react";
import { GitHubResError } from "types";
import styles from "./Search.module.scss";

interface ISearch {
    error: GitHubResError;
    onSubmit: (text: string) => void;
}

export const Search = ({ error, onSubmit }: ISearch) => {
    const searchRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const content = searchRef.current?.value || "";
        if (content) {
            onSubmit(content);
            if (searchRef.current) {
                searchRef.current.value = "";
            }
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
                ref={searchRef}
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
