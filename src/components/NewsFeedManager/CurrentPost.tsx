import { formatBodyText } from "@/functions/formatBodyText";
import { CurrentPostProps } from "@/types/CurrentPostProps";
import closeIcon from "@/assets/images/close-icon.png";
import styles from "./CurrentPost.module.css";

import Image from "next/image";
import Button from "../ui/Button/Button";

export default function CurrentPost({
    currentPost,
    handleDelete,
    handleEdit,
    toggleCurrentPost,
    closeCurrentPost,
}: CurrentPostProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.postTimestamp}>
                {currentPost?.timestamp}
                <Image onClick={() => closeCurrentPost()} className={styles.closeIcon} src={closeIcon} alt="close" />
            </div>

            <div className={styles.postTitle}>{currentPost?.title}</div>
            <div className={styles.postBody}>{formatBodyText(currentPost?.body ?? "")}</div>
            <div className={styles.buttonWrapper}>
                <Button btnType="secondary" onClick={() => handleEdit(currentPost)}>
                    Edit
                </Button>
                <Button btnType="primary" onClick={() => handleDelete(currentPost)}>
                    Delete
                </Button>
            </div>
        </div>
    );
}
