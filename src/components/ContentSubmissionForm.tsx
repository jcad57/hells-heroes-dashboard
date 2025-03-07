import Image from "next/image";
import { CreateNewPostProps } from "@/types/CreateNewPostProps";

import closeIcon from "@/assets/images/close-icon.png";
import styles from "@/styles/contentSubmissionForm.module.css";
import Button from "./ui/Button/Button";

export default function ContentSubmissionForm({
    register,
    handleSubmit,
    onSubmit,
    editingPost,
    setShowContentSubmissionForm,
}: CreateNewPostProps) {
    return (
        <>
            <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.flexBetween}>
                    <h3>{editingPost ? "Update Post" : "Create Post"}</h3>
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
                    {...register("title", { required: "Title is required" })}
                />
                <label>Body</label>
                <textarea
                    rows={6}
                    placeholder="Upgrade your single day ticket to ..."
                    {...register("body", { required: "Body is required" })}
                />

                <Button btnType={"primary"} type="submit">
                    {editingPost ? "Save Post!" : "Submit!"}
                </Button>
            </form>
        </>
    );
}
