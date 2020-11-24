import React, { useState, useCallback } from "react";
import usePostsContextValue from "./usePostContextValue";

import { PostsContext } from "./types";
import PostsList from "./postsList";

function App() {
  const postsContextValue = usePostsContextValue();
  return (
    <PostsContext.Provider value={postsContextValue}>
      <PostsList />
    </PostsContext.Provider>
  );
}

export default App;
