import { ButtonProps } from "@/types/ButtonProps";
import styles from "@/components/ui/Button/Button.module.css";
import Image from "next/image";
import { useWindowSize } from "@/hooks/useWindowSize";

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
            {isMobile && btnType !== "logout" && children}
        </button>
    );
}
