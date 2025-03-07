import { NewsFeedItemProps } from "./NewsFeedItemProps";

export interface AllPostsProps {
    newsFeedItems: NewsFeedItemProps[];
    currentPostId: string | undefined;
    toggleCurrentPost: (id: string) => void;
    handleCreate: () => void;
}
