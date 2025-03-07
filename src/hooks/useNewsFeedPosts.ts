import { useState } from "react";
import { collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../data/firebase";
import { useFetchAllPosts } from "./useFetchAllPosts";
import { NewsFeedItemProps } from "@/types/NewsFeedItemProps";
import { CreateNewPostProps } from "@/types/CreateNewPostProps";

export default function useNewsfeedPosts(setValue: (title: string, body: string) => void, reset: () => void) {
    const newsFeedItems = useFetchAllPosts();
    const [showCurrentPost, setShowCurrentPost] = useState(false);
    const [currentPost, setCurrentPost] = useState<NewsFeedItemProps | null>(null);
    const [editingPost, setEditingPost] = useState<NewsFeedItemProps | null>(null);
    const [showContentSubmissionForm, setShowContentSubmissionForm] = useState(false);

    function toggleCurrentPost(id: string) {
        const fitleredPost = newsFeedItems.find((item) => item.id === id);
        if (showCurrentPost) {
            if (fitleredPost === currentPost) setShowCurrentPost(false);
            else setCurrentPost(fitleredPost || null);
        } else {
            setShowContentSubmissionForm(false);
            setShowCurrentPost(true);
            setCurrentPost(fitleredPost || null);
        }
    }

    function closeCurrentPost() {
        setShowCurrentPost(false);
    }

    const onSubmit = async (data: CreateNewPostProps) => {
        if (editingPost) {
            await updateDoc(doc(db, "newsfeed-items", editingPost.id), { ...data });
            setEditingPost(null);
        } else {
            await addDoc(collection(db, "newsfeed-items"), { ...data, timestamp: new Date().toUTCString() });
        }
        setShowContentSubmissionForm(false);
        reset();
    };

    const handleCreate = () => {
        setEditingPost(null);
        setShowCurrentPost(false);
        setValue("title", "");
        setValue("body", "");
        setShowContentSubmissionForm(true);
    };

    const handleEdit = (post: NewsFeedItemProps) => {
        setShowCurrentPost(false);
        setShowContentSubmissionForm(true);
        setEditingPost(post);
        setValue("title", post.title);
        setValue("body", post.body);
    };

    const handleDelete = async (post: NewsFeedItemProps) => {
        console.log(post);
        const attempt = window.confirm("Are you sure you want to delete this post?");
        if (!attempt) return;
        setShowCurrentPost(false);

        return await deleteDoc(doc(db, "newsfeed-items", post.id));
    };

    return {
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
    };
}
