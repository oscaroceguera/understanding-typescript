import { createContext } from "react";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostsContextData {
  posts: Post[];
  isLoading: boolean;
  fetchPosts: () => void;
  removePost: (postId: number) => void;
}

export const postsContextDefaultValue: PostsContextData = {
  posts: [],
  isLoading: false,
  fetchPosts: () => null,
  removePost: () => null
};

export const PostsContext = createContext<PostsContextData>(
  postsContextDefaultValue
);
