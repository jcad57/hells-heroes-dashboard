import { FieldValues, UseFormRegister } from "react-hook-form";
import { NewsFeedItemProps } from "./NewsFeedItemProps";
import { FormEvent } from "react";

export interface CreateNewPostProps {
    setShowContentSubmissionForm: (show: boolean) => void;
    register: UseFormRegister<FieldValues>;
    handleSubmit: (callback: (data: FieldValues) => void) => (event: FormEvent<HTMLFormElement>) => void;
    onSubmit: (data: CreateNewPostProps) => void;
    editingPost: NewsFeedItemProps | null;
    reset?: () => void;
}
