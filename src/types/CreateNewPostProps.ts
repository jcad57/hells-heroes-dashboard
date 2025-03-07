import { UseFormRegister } from "react-hook-form";
import { NewsFeedItemProps } from "./NewsFeedItemProps";
import { FormEvent } from "react";

export interface CreateNewPostProps {
    setShowContentSubmissionForm: (show: boolean) => void;
    register: UseFormRegister<CreateNewPostData>;
    handleSubmit: (callback: (data: CreateNewPostData) => void) => (event: FormEvent<HTMLFormElement>) => void;
    onSubmit: (data: CreateNewPostData) => Promise<void>;
    editingPost: NewsFeedItemProps | null;
    reset?: () => void;
    newsFeedItems?: NewsFeedItemProps[];
}

export interface CreateNewPostData {
    title: string;
    body: string;
}
