"use client";
import { useFetchAllPosts } from "@/hooks/useFetchAllPosts";

import styles from "./NewsFeedManager.module.css";
import AllPosts from "./AllPosts";
import useManagePosts from "@/hooks/useManagePosts";
import NoActivePost from "../ui/NoActivePost";
import CurrentPost from "./CurrentPost";
import ContentSubmissionForm from "../ContentSubmissionForm";

export default function NewsFeedManager() {
    const newsFeed = useFetchAllPosts();
    const {
        findPost,
        currentPost,
        showContentSubmissionForm,
        setShowContentSubmissionForm,
        toggleCurrentPost,
        deletePost,
        editPost,
        contentFormType,
        createPost,
        newSubmissionBody,
        newSubmissionTitle,
        setNewSubmissionBody,
        setNewSubmissionTitle,
    } = useManagePosts();

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h2>Manage Post</h2>
                {!showContentSubmissionForm && !currentPost && <NoActivePost />}
                {currentPost && (
                    <CurrentPost
                        currentPost={currentPost}
                        toggleCurrentPost={toggleCurrentPost}
                        handleDeletePost={deletePost}
                        handleEditPost={editPost}
                    />
                )}
                {showContentSubmissionForm && (
                    <ContentSubmissionForm
                        formType={contentFormType}
                        setShowContentSubmissionForm={setShowContentSubmissionForm}
                        newSubmissionBody={newSubmissionBody}
                        newSubmissionTitle={newSubmissionTitle}
                        setNewSubmissionBody={setNewSubmissionBody}
                        setNewSubmissionTitle={setNewSubmissionTitle}
                    />
                )}
            </div>
            <div className={styles.card}>
                <AllPosts
                    createPost={createPost}
                    newsFeed={newsFeed}
                    handleSelectPost={(id: string) => findPost(id)}
                    currentPostId={currentPost ? currentPost.id : undefined}
                />
            </div>
        </div>
    );
}
