import { CreateNewPostProps } from "@/types/CreateNewPostProps";

import closeIcon from "@/assets/images/close-icon.png";
import Image from "next/image";
import styles from "@/styles/contentSubmissionForm.module.css";
import Button from "./ui/Button/Button";
import useManagePosts from "@/hooks/useManagePosts";

export default function ContentSubmissionForm({ title, closeCreateNewPostForm }: CreateNewPostProps) {
    const { setNewPostBody, newPostBody, newPostTitle, submitNewPost, setNewPostTitle } = useManagePosts();

    return (
        <div>
            <form className={styles.wrapper}>
                <div className={styles.flexBetween}>
                    <h3>{title}</h3>
                    <Image
                        onClick={() => closeCreateNewPostForm && closeCreateNewPostForm()}
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
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    value={newPostTitle}
                />
                <label>Body</label>
                <textarea
                    rows={6}
                    placeholder="Upgrade your single day ticket to ..."
                    onChange={(e) => setNewPostBody(e.target.value)}
                    value={newPostBody}
                />
                <Button btnType="primary" onClick={(e) => submitNewPost(e)}>
                    Submit!
                </Button>
            </form>
        </div>
    );
}
