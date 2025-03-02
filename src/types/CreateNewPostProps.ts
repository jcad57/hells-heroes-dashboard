import { NewsFeedItemProps } from "./NewsFeedItemProps";

export interface CreateNewPostProps {
    currentPost?: NewsFeedItemProps | undefined;
    setShowContentSubmissionForm: (show: boolean) => void;
    formType: string;
    newSubmissionBody: string;
    newSubmissionTitle: string;
    setNewSubmissionBody: (body: string) => void;
    setNewSubmissionTitle: (title: string) => void;
}
