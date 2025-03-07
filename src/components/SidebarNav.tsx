import Image from "next/image";

import styles from "@/styles/sidebarNav.module.css";

import newsFeedIcon from "@/assets/images/more.png";
import pushIcon from "@/assets/images/bell.png";
import Button from "./ui/Button/Button";
import useManageUser from "@/hooks/useManageUser";

import { SidebarNavProps } from "@/types/SidebarNavProps";

export default function SidebarNav({ tab, setTab }: SidebarNavProps) {
    const { signUserOut } = useManageUser();
    return (
        <div className={styles.sidebarNavWrapper}>
            <ul className={styles.sidebarNavList}>
                <li className={tab === "newsfeed" ? `${styles.selected}` : ""} onClick={() => setTab("newsfeed")}>
                    <Image src={newsFeedIcon} width={25} height={25} alt="newsfeed" />
                    Newsfeed
                </li>
                <li className={tab === "push" ? `${styles.selected}` : ""} onClick={() => setTab("push")}>
                    <Image src={pushIcon} width={25} height={25} alt="newsfeed" />
                    Push Notifications
                </li>
                {/* <li
                    className={tab === "business-list" ? `${styles.selected}` : ""}
                    onClick={() => setTab("business-list")}>
                    <Image src={businessIcon} width={25} height={25} alt="newsfeed" />
                    Business List
                </li> */}
            </ul>
            <Button btnType="primary" onClick={() => signUserOut()}>
                Log Out
            </Button>
        </div>
    );
}
