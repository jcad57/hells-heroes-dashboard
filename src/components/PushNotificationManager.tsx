import styles from "../styles/pushNotificationManager.module.css";
import ContentSubmissionForm from "./ContentSubmissionForm";

export default function PushNotificationManager() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h2>Push Notification Manager</h2>
                <ContentSubmissionForm title="Send New Push Notification" />
            </div>
        </div>
    );
}
