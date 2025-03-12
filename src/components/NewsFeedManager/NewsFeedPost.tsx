"use client";
import { NewsFeedItemProps } from "@/types/NewsFeedItemProps";
import styles from "./NewsFeedPost.module.css";

export default function NewsFeedPost({ id, title, body, timestamp, onClick, currentPostId }: NewsFeedItemProps) {
    return (
        <div
            className={`${styles.wrapper} ${currentPostId === id ? styles.selectedPost : ""}`}
            onClick={() => onClick(id)}>
            <span className={styles.timestamp}>{timestamp}</span>
            <span className={styles.postTitle}>{title.length > 17 ? title.slice(0, 17) + "..." : title}</span>
            <div className={styles.postBody}>{body.length > 35 ? body.slice(0, 35) + "..." : body}</div>
        </div>
    );
}
