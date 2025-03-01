import { NewsFeedItemProps } from "./NewsFeedItemProps";

export interface CreateNewPostProps {
    currentPost?: NewsFeedItemProps | undefined;
    title: string;
    closeCreateNewPostForm?: () => void;
}
