"use client";

import NewsFeedPost from "./NewsFeedPost";
import Button from "../ui/Button/Button";
import styles from "./AllPosts.module.css";
import { AllPostsProps } from "@/types/AllPostsProps";

export default function AllPosts({ newsFeed, handleSelectPost, currentPostId, createPost }: AllPostsProps) {
    return (
        <div className={styles.wrapper}>
            <h2>All Posts</h2>
            <Button btnType="secondary" onClick={() => createPost()}>
                Create New Post
            </Button>
            <div className={styles.newsFeedListWrapper}>
                {newsFeed.map((newsItem) => (
                    <NewsFeedPost
                        key={newsItem.id}
                        timestamp={newsItem.timestamp}
                        id={newsItem.id}
                        title={newsItem.title}
                        body={newsItem.body}
                        onClick={handleSelectPost}
                        currentPostId={currentPostId}
                    />
                ))}
            </div>
        </div>
    );
}
