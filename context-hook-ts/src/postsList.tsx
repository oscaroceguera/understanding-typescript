import React, { useCallback, useContext, useEffect } from "react";
import { PostsContext } from "./types";

function usePostsLoading() {
  const { fetchPosts } = useContext(PostsContext);
  useEffect(
    () => {
      fetchPosts();
    },
    [fetchPosts]
  );
}

const PostsList = () => {
  const { posts, removePost } = useContext(PostsContext);

  usePostsLoading();

  const handlePostRemove = useCallback(
    (postId: number) => () => {
      removePost(postId);
    },
    [removePost]
  );

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} onClick={handlePostRemove(post.id)}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
