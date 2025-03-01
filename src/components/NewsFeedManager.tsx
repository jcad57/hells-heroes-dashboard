"use client";
import { useFetchAllPosts } from "@/hooks/useFetchAllPosts";

import styles from "@/styles/newsFeedManager.module.css";
import AllPosts from "./AllPosts";
import useManagePosts from "@/hooks/useManagePosts";
import NoActivePost from "./ui/NoActivePost";
import CurrentPost from "./CurrentPost";
import ContentSubmissionForm from "./ContentSubmissionForm";

export default function NewsFeedManager() {
    const newsFeed = useFetchAllPosts();
    const {
        findPost,
        currentPost,
        openCreateNewPostForm,
        closeCreateNewPostForm,
        showCreateNewPostModal,
        toggleCurrentPost,
        deletePost,
    } = useManagePosts();

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h2>Manage Post</h2>
                {!showCreateNewPostModal && !currentPost && <NoActivePost />}
                {currentPost && (
                    <CurrentPost
                        currentPost={currentPost}
                        toggleCurrentPost={toggleCurrentPost}
                        handleDeletePost={deletePost}
                    />
                )}
                {showCreateNewPostModal && (
                    <ContentSubmissionForm title="Create New Post" closeCreateNewPostForm={closeCreateNewPostForm} />
                )}
            </div>
            <div className={styles.card}>
                <AllPosts
                    openCreateNewPostForm={openCreateNewPostForm}
                    newsFeed={newsFeed}
                    handleSelectPost={(id: string) => findPost(id)}
                    currentPostId={currentPost ? currentPost.id : undefined}
                />
            </div>
        </div>
    );
}
