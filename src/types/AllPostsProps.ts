import { NewsFeedItemProps } from "./NewsFeedItemProps";

export interface AllPostsProps {
    newsFeed: NewsFeedItemProps[];
    handleSelectPost: (id: string) => void;
    currentPostId: string | undefined;
    openCreateNewPostForm: () => void;
}
