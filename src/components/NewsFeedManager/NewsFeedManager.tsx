"use client";
import { useFetchAllPosts } from "@/hooks/useFetchAllPosts";

import styles from "./NewsFeedManager.module.css";
import AllPosts from "./AllPosts";
import useManagePosts from "@/hooks/useManagePosts";
import NoActivePost from "../ui/NoActivePost";
import CurrentPost from "./CurrentPost";
import ContentSubmissionForm from "../ContentSubmissionForm";

import { useForm } from "react-hook-form";
import useNewsfeedPosts from "@/hooks/useNewsFeedPosts";

export default function NewsFeedManager() {
    const newsFeed = useFetchAllPosts();
    const { findPost } = useManagePosts();

    const { register, handleSubmit, setValue, reset } = useForm();
    const {
        editingPost,
        showContentSubmissionForm,
        setShowContentSubmissionForm,
        onSubmit,
        handleEdit,
        handleCreate,
        handleDelete,
        showCurrentPost,
        toggleCurrentPost,
        currentPost,
        closeCurrentPost,
    } = useNewsfeedPosts(setValue, reset);

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h2>Manage Post</h2>
                {!showContentSubmissionForm && !showCurrentPost && <NoActivePost />}
                {showCurrentPost && (
                    <CurrentPost
                        currentPost={currentPost}
                        closeCurrentPost={closeCurrentPost}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                )}

                {showContentSubmissionForm && (
                    <ContentSubmissionForm
                        register={register}
                        handleSubmit={handleSubmit}
                        onSubmit={onSubmit}
                        editingPost={editingPost}
                        setShowContentSubmissionForm={setShowContentSubmissionForm}
                    />
                )}
            </div>
            <div className={styles.card}>
                <AllPosts
                    toggleCurrentPost={toggleCurrentPost}
                    handleCreate={handleCreate}
                    newsFeed={newsFeed}
                    handleSelectPost={(id: string) => findPost(id)}
                    currentPostId={currentPost ? currentPost.id : undefined}
                />
            </div>
        </div>
    );
}
