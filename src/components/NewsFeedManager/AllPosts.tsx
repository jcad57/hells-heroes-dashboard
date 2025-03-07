"use client";

import NewsFeedPost from "./NewsFeedPost";
import Button from "../ui/Button/Button";
import styles from "./AllPosts.module.css";
import { AllPostsProps } from "@/types/AllPostsProps";

export default function AllPosts({ newsFeedItems, currentPostId, handleCreate, toggleCurrentPost }: AllPostsProps) {
    return (
        <div className={styles.wrapper}>
            <h2>All Posts</h2>
            <Button btnType="secondary" onClick={() => handleCreate()}>
                Create New Post
            </Button>
            <div className={styles.newsFeedListWrapper}>
                {newsFeedItems.map((newsItem) => (
                    <NewsFeedPost
                        key={newsItem.id}
                        timestamp={newsItem.timestamp}
                        id={newsItem.id}
                        title={newsItem.title}
                        body={newsItem.body}
                        onClick={() => toggleCurrentPost(newsItem.id)}
                        currentPostId={currentPostId}
                    />
                ))}
            </div>
        </div>
    );
}
