import { useState } from "react";
import { useFetchAllPosts } from "@/hooks/useFetchAllPosts";
import { NewsFeedItemProps } from "@/types/NewsFeedItemProps";
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../data/firebase";

function useManagePosts() {
    const newsFeedItems = useFetchAllPosts();
    const [contentFormType, setContentFormType] = useState("");
    const [currentPost, setCurrentPost] = useState<NewsFeedItemProps | undefined>();
    const [showContentSubmissionForm, setShowContentSubmissionForm] = useState(false);

    const [newSubmissionTitle, setNewSubmissionTitle] = useState("");
    const [newSubmissionBody, setNewSubmissionBody] = useState("");
    const [newSubmissionTimestamp, setNewSubmissionTimestamp] = useState("");
    const [newSubmissionId, setNewSubmissionId] = useState("");

    function toggleCurrentPost() {
        if (currentPost) setCurrentPost(undefined);
        else setShowContentSubmissionForm(false);
    }

    async function submitNewPost(data) {
        const date = new Date();
        console.log(data);
        if (data)
            await addDoc(collection(db, "newsfeed-items"), {
                title: data.title,
                body: data.body,
                timestamp: date.toUTCString(),
            });

        setNewSubmissionBody("");
        setNewSubmissionTitle("");
        setShowContentSubmissionForm(false);
    }

    async function submitEditPost(e: React.FormEvent) {
        e.preventDefault();
        console.log(newSubmissionTitle);
        if (newSubmissionTitle && newSubmissionBody) {
            await updateDoc(doc(db, "newsfeed-items", newSubmissionId), {
                title: newSubmissionTitle,
                body: newSubmissionBody,
                timestamp: newSubmissionTimestamp,
            });
            console.log("updated");
        }
    }

    function findPost(id: string) {
        setCurrentPost(undefined);
        setShowContentSubmissionForm(false);
        const fitleredPost = newsFeedItems.find((item) => item.id === id);
        if (fitleredPost?.id === currentPost?.id) return;
        setCurrentPost(fitleredPost);
    }

    async function deletePost(id: string) {
        setCurrentPost(undefined);
        return await deleteDoc(doc(db, "newsfeed-items", id));
    }

    function editPost(id: string) {
        setCurrentPost(undefined);
        const post = newsFeedItems.find((item) => item.id === id);
        console.log(post.title);
        setContentFormType("edit");
        setNewSubmissionTitle(post.title);
        setNewSubmissionBody(post.body);
        setNewSubmissionTimestamp(post.timestamp);
        setNewSubmissionId(id);
        setShowContentSubmissionForm(true);
    }

    function createPost() {
        setContentFormType("create");
        setCurrentPost(undefined);
        setShowContentSubmissionForm(true);
        setNewSubmissionTitle("");
        setNewSubmissionBody("");
        setNewSubmissionTimestamp("");
    }

    return {
        findPost,
        deletePost,
        editPost,
        submitNewPost,
        submitEditPost,
        currentPost,
        toggleCurrentPost,
        setShowContentSubmissionForm,
        showContentSubmissionForm,
        newSubmissionTitle,
        setNewSubmissionTitle,
        newSubmissionBody,
        setNewSubmissionBody,
        contentFormType,
        createPost,
    };
}

export default useManagePosts;
