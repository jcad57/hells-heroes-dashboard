import useManagePosts from "@/hooks/useManagePosts";
import styles from "@/styles/noActivePost.module.css";

export default function NoActivePost() {
    const { openCreateNewPostForm } = useManagePosts();
    return (
        <div className={styles.wrapper}>
            <span>
                Select a post to manage or{" "}
                <span className="text-gradient__purp" onClick={() => openCreateNewPostForm()}>
                    create
                </span>{" "}
                a new one
            </span>
        </div>
    );
}
