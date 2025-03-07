import { NewsFeedItemProps } from "./NewsFeedItemProps";

export interface CurrentPostProps {
    currentPost?: NewsFeedItemProps | null;
    toggleCurrentPost?: () => void;
    closeCurrentPost: () => void;
    handleDelete: (post: NewsFeedItemProps) => void;
    handleEdit: (post: NewsFeedItemProps) => void;
}
