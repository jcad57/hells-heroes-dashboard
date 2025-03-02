import { formatBodyText } from "@/functions/formatBodyText";
import { CurrentPostProps } from "@/types/CurrentPostProps";
import closeIcon from "@/assets/images/close-icon.png";
import styles from "./CurrentPost.module.css";

import Image from "next/image";
import Button from "../ui/Button/Button";

export default function CurrentPost({
    currentPost,
    handleDeletePost,
    handleEditPost,
    toggleCurrentPost,
}: CurrentPostProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.postTimestamp}>
                {currentPost?.timestamp}
                <Image onClick={() => toggleCurrentPost()} className={styles.closeIcon} src={closeIcon} alt="close" />
            </div>

            <div className="selected-post__title">{currentPost?.title}</div>
            <div className={styles.postBody}>{formatBodyText(currentPost?.body ?? "")}</div>
            <div className={styles.buttonWrapper}>
                <Button btnType="secondary" onClick={() => handleEditPost(currentPost?.id ?? "")}>
                    Edit
                </Button>
                <Button btnType="primary" onClick={() => handleDeletePost?.(currentPost?.id ?? "")}>
                    Delete
                </Button>
            </div>
        </div>
    );
}
