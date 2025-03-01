export interface NewsFeedItemProps {
    id: string;
    title: string;
    body: string;
    timestamp: string;
    onClick: (id: string) => void;
    currentPostId: string | undefined;
}
