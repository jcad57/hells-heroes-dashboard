import { NewsFeedItemProps } from "./NewsFeedItemProps";

export interface CurrentPostProps {
    currentPost?: NewsFeedItemProps | undefined;
    handleDeletePost: (id: string) => void;
    handleEditPost: (id: string) => void;
    toggleCurrentPost: () => void;
}
