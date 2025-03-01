import { useState } from "react";
import { useFetchAllPosts } from "@/hooks/useFetchAllPosts";
import { NewsFeedItemProps } from "@/types/NewsFeedItemProps";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../data/firebase";

function useManagePosts() {
    const newsFeedItems = useFetchAllPosts();
    const [currentPost, setCurrentPost] = useState<NewsFeedItemProps | undefined>();
    const [showCreateNewPostModal, setShowCreateNewPostModal] = useState(false);
    // const [showEditPostModal, setShowEditPostModal] = useState(false);
    const [newPostTitle, setNewPostTitle] = useState("");
    const [newPostBody, setNewPostBody] = useState("");

    function openCreateNewPostForm() {
        setShowCreateNewPostModal(true);
        setCurrentPost(undefined);
    }

    function closeCreateNewPostForm() {
        setShowCreateNewPostModal(false);
    }

    function toggleCurrentPost() {
        if (currentPost) setCurrentPost(undefined);
        else setShowCreateNewPostModal(false);
    }

    async function submitNewPost(e: React.FormEvent) {
        e.preventDefault();
        const date = new Date();
        {
            if (newPostTitle && newPostBody)
                await addDoc(collection(db, "newsfeed-items"), {
                    title: newPostTitle,
                    body: newPostBody,
                    timestamp: date.toUTCString(),
                });
        }
        setNewPostBody("");
        setNewPostTitle("");
        setShowCreateNewPostModal(false);
    }

    function findPost(id: string) {
        setCurrentPost(undefined);
        setShowCreateNewPostModal(false);
        const fitleredPost = newsFeedItems.find((item) => item.id === id);
        if (fitleredPost?.id === currentPost?.id) return;
        setCurrentPost(fitleredPost);
        console.log(fitleredPost);
    }

    async function deletePost(id: string) {
        setCurrentPost(undefined);
        return await deleteDoc(doc(db, "newsfeed-items", id));
    }

    return {
        findPost,
        deletePost,
        submitNewPost,
        currentPost,
        toggleCurrentPost,
        openCreateNewPostForm,
        closeCreateNewPostForm,
        showCreateNewPostModal,
        newPostTitle,
        setNewPostTitle,
        newPostBody,
        setNewPostBody,
    };
}

export default useManagePosts;
