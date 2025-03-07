import { ReactNode } from "react";

import styles from "@/styles/pageHeader.module.css";

export default function PageHeader({ children }: { children: ReactNode }) {
    return (
        <div className={styles.wrapper}>
            {/* <img className="menu-icon" src={menuIcon} /> */}
            <h1 className={styles.headerText}>{children}</h1>
        </div>
    );
}
