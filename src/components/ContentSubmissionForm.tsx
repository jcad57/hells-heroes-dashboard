import { CreateNewPostProps } from "@/types/CreateNewPostProps";

import closeIcon from "@/assets/images/close-icon.png";
import Image from "next/image";
import styles from "@/styles/contentSubmissionForm.module.css";
import Button from "./ui/Button/Button";
import useManagePosts from "@/hooks/useManagePosts";
import { useMemo } from "react";
import { useForm } from "react-hook-form";

export default function ContentSubmissionForm({
    setShowContentSubmissionForm,
    formType,
    newSubmissionTitle,
    setNewSubmissionTitle,
    newSubmissionBody,
    setNewSubmissionBody,
}: CreateNewPostProps) {
    const { submitNewPost, submitEditPost } = useManagePosts();

    const formTitle = useMemo(() => {
        if (formType === "edit") return "Edit Post";
        if (formType === "push") return "Create New Push Notification";
        else return "Create New Post";
    }, [formType]);

    const handleSubmitPost = (data) => {
        console.log(data);
        if (formType === "create") {
            submitNewPost(data);
            setShowContentSubmissionForm(false);
        } else {
            submitEditPost(data);
            setShowContentSubmissionForm(false);
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div>
            <form className={styles.wrapper} onSubmit={handleSubmit(handleSubmitPost)}>
                <div className={styles.flexBetween}>
                    <h3>{formTitle}</h3>
                    <Image
                        onClick={() => setShowContentSubmissionForm(false)}
                        className={styles.closeIcon}
                        src={closeIcon}
                        alt="close"
                    />
                </div>
                <label>
                    <div className="flex-center ">Title</div>
                </label>
                <input
                    placeholder="Upgrades available now..."
                    // onChange={(e) => setNewSubmissionTitle(e.target.value)}
                    {...register("title", { required: "Title is required" })}
                />
                <label>Body</label>
                <textarea
                    rows={6}
                    placeholder="Upgrade your single day ticket to ..."
                    {...register("body", { required: "Body is required" })}
                />

                <Button btnType={formType === "create" ? "primary" : "secondary"} type="submit">
                    {formType === "create" ? "Submit!" : "Save Post!"}
                </Button>
            </form>
        </div>
    );
}
