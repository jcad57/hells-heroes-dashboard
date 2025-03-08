import styles from "@/components/Dashboard.module.css";

import Logo from "./ui/Logo";
import NewsFeedManager from "./NewsFeedManager/NewsFeedManager";
import Button from "./ui/Button/Button";
import logoutIcon from "@/assets/images/logout-icon.png";
import useManageUser from "@/hooks/useManageUser";

export default function Dashboard() {
    const { signUserOut } = useManageUser();

    return (
        <div className={`${styles.commandCenterWrapper} ${styles.dashboardCard}`}>
            <div className={styles.headingWrapper}>
                <div className={styles.logoContainer}>
                    <Logo />
                </div>

                <Button icon={logoutIcon} className={styles.logoutBtn} btnType="logout" onClick={() => signUserOut()}>
                    Logout
                </Button>
            </div>

            <div className={styles.dashboardContent}>
                <NewsFeedManager />
            </div>
        </div>
    );
}
