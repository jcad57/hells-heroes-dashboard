import styles from "@/styles/dashboard.module.css";
import PageHeader from "./ui/PageHeader";
import Logo from "./ui/Logo";
import SidebarNav from "./SidebarNav";
import { useState } from "react";
import NewsFeedManager from "./NewsFeedManager/NewsFeedManager";
import PushNotificationManager from "./PushNotificationManager/PushNotificationManager";

export default function Dashboard() {
    const [tab, setTab] = useState("newsfeed");
    return (
        <div className={`${styles.commandCenterWrapper} ${styles.dashboardCard}`}>
            <div className={styles.logoContainer}>
                <Logo />
            </div>
            <PageHeader>Hell&apos;s Heroes VII - Dashboard</PageHeader>
            <SidebarNav tab={tab} setTab={setTab} />
            <div className={styles.dashboardContent}>
                {tab === "newsfeed" && <NewsFeedManager />}
                {tab === "push" && <PushNotificationManager />}
                {tab === "business-list" && <h1>Business List</h1>}
            </div>
        </div>
    );
}
