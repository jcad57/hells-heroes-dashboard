"use client";
import { useForm } from "react-hook-form";
import { CreateNewPostData } from "@/types/CreateNewPostProps";
import { useWindowSize } from "@/hooks/useWindowSize";
import useNewsfeedPosts from "@/hooks/useNewsFeedPosts";

import styles from "./NewsFeedManager.module.css";
import AllPosts from "./AllPosts";
import NoActivePost from "../ui/NoActivePost";
import CurrentPost from "./CurrentPost";
import ContentSubmissionForm from "../ContentSubmissionForm";

export default function NewsFeedManager() {
    const { isMobile } = useWindowSize();

    const { register, handleSubmit, setValue, reset } = useForm<CreateNewPostData>();
    const {
        newsFeedItems,
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
            {!isMobile && (
                <>
                    <div className={styles.card}>
                        <h2>Manage Post</h2>
                        {!showContentSubmissionForm && !showCurrentPost && (
                            <NoActivePost setShowContentSubmissionForm={setShowContentSubmissionForm} />
                        )}
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
                            newsFeedItems={newsFeedItems}
                            currentPostId={currentPost ? currentPost.id : undefined}
                        />
                    </div>
                </>
            )}
            {isMobile && (
                <>
                    <div className={styles.card}>
                        <AllPosts
                            toggleCurrentPost={toggleCurrentPost}
                            handleCreate={handleCreate}
                            newsFeedItems={newsFeedItems}
                            currentPostId={currentPost ? currentPost.id : undefined}
                        />
                    </div>
                    <div className={showCurrentPost ? styles.mobilePopUp : ""}>
                        {showCurrentPost && (
                            <CurrentPost
                                currentPost={currentPost}
                                closeCurrentPost={closeCurrentPost}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                            />
                        )}
                    </div>
                    <div className={showContentSubmissionForm ? styles.mobilePopUp : ""}>
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
                </>
            )}
        </div>
    );
}
