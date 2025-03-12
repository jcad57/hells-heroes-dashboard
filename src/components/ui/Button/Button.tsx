"use client";
import { ButtonProps } from "@/types/ButtonProps";
import { useWindowSize } from "@/hooks/useWindowSize";
import styles from "@/components/ui/Button/Button.module.css";
import Image from "next/image";

export default function Button({ children, btnType, onClick, icon }: ButtonProps) {
    const { isMobile } = useWindowSize();
    return (
        <button
            className={`${styles.btn} ${
                btnType === "primary" || btnType === "logout" ? styles.primary : styles.secondary
            } ${icon && styles.icon}`}
            onClick={onClick}>
            {icon && <Image src={icon} width={25} height={25} alt="logout" />}
            {!isMobile && children}
            {isMobile && btnType !== "logout" && <span className={styles.btnText}>{children}</span>}
        </button>
    );
}
