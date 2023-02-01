import React from "react";
import styles from "./Search.module.scss";

interface ISearch {}

export const Search = ({}: ISearch) => (
    <div className={styles.search}>Search</div>
);
