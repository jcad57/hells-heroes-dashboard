import styles from "@/components/ui/NoActivePost.module.css";

interface NoActivePostProps {
    setShowContentSubmissionForm: (show: boolean) => void;
}

export default function NoActivePost({ setShowContentSubmissionForm }: NoActivePostProps) {
    return (
        <div className={styles.wrapper}>
            <span>
                Select a post to manage or{" "}
                <span className={styles.createNewPost} onClick={() => setShowContentSubmissionForm(true)}>
                    create
                </span>{" "}
                a new one
            </span>
        </div>
    );
}
