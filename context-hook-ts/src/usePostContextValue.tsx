import React, { useState, useCallback, useMemo } from "react";
import { PostsContextData, Post } from "./types";

function usePostsContextValue(): PostsContextData {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = useCallback(
    () => {
      setIsLoading(true);
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(fetchedPosts => {
          setPosts(fetchedPosts);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [setPosts]
  );

  const removePost = useCallback(
    (postId: number) => {
      setIsLoading(true);

      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE"
      })
        .then(() => {
          const newPosts = [...posts];
          const removedPostIndex = newPosts.findIndex(
            post => post.id === postId
          );

          if (removedPostIndex > -1) {
            newPosts.splice(removedPostIndex, 1);
          }
          setPosts(newPosts);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [setPosts, posts]
  );

  return useMemo(
    () => ({
      posts,
      isLoading,
      fetchPosts,
      removePost
    }),
    [posts, isLoading, fetchPosts, removePost]
  );
}

export default usePostsContextValue;
