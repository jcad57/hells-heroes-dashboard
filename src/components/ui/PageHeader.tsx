"use client";
import { ReactNode } from "react";

import styles from "@/components/ui/PageHeader.module.css";

export default function PageHeader({ children }: { children: ReactNode }) {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.headerText}>{children}</h1>
        </div>
    );
}
