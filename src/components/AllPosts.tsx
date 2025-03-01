"use client";
import NewsFeedPost from "./NewsFeedPost";
import Button from "./ui/Button/Button";
import { AllPostsProps } from "@/types/AllPostsProps";

export default function AllPosts({ newsFeed, handleSelectPost, currentPostId, openCreateNewPostForm }: AllPostsProps) {
    return (
        <>
            <h2>All Posts</h2>
            <div></div>
            <Button btnType="secondary" onClick={() => openCreateNewPostForm()}>
                Create New Post
            </Button>
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
        </>
    );
}
