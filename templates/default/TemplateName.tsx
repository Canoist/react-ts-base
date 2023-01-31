import React from "react";
import styles from "./TemplateName.module.scss";

interface ITemplateName {}

export const TemplateName = ({}: ITemplateName) => (
    <div className={styles.TemplateName} data-testid="TemplateName">
        TemplateName Component
    </div>
);
