import { PageProps } from '@/types';

export interface Author {
    id: number;
    name: string;
}

export interface Post {
    id: number;
    title: string;
    content: string;
    image: string | null;
    user_id: number;
    likes: number;
    author: Author;
    created_at: string;
}

export interface PostFormData {
    [key: string]: string | File | null;
    title: string;
    content: string;
    image: File | null;
}

export interface DashboardProps extends PageProps {
    userPosts: Post[];
}

export interface CreateProps extends PageProps {}

export interface EditProps extends PageProps {
    post: Post;
}

export interface ShowProps extends PageProps {
    post: Post;
}

export interface Props {
    post: Post[];
    showAuthor?: boolean;
    canEdit?: boolean;
}
