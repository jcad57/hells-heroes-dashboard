import { NewsFeedItemProps } from "./NewsFeedItemProps";

export interface CurrentPostProps {
    currentPost?: NewsFeedItemProps | null;
    toggleCurrentPost?: () => void;
    closeCurrentPost: () => void;
    handleDelete: (post: NewsFeedItemProps | null) => void;
    handleEdit: (post: NewsFeedItemProps | null) => void;
}
