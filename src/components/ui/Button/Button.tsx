import { ButtonProps } from "@/types/Button";
import styles from "@/components/ui/Button/Button.module.css";

export default function Button({ children, btnType, onClick }: ButtonProps) {
    return (
        <button
            className={`${styles.btn} ${btnType === "primary" ? styles.primary : styles.secondary}`}
            onClick={onClick}>
            {children}
        </button>
    );
}
