import { useState } from "react";
import { useFetchAllPosts } from "@/hooks/useFetchAllPosts";
import { NewsFeedItemProps } from "@/types/NewsFeedItemProps";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../data/firebase";

function useManagePosts() {
    const newsFeedItems = useFetchAllPosts();
    const [currentPost, setCurrentPost] = useState<NewsFeedItemProps | undefined>();
    const [showContentSubmissionForm, setShowContentSubmissionForm] = useState(false);

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

    return {
        findPost,
        deletePost,
        currentPost,

        setShowContentSubmissionForm,
        showContentSubmissionForm,
    };
}

export default useManagePosts;
