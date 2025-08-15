import { createContext, useReducer } from "react";
import postHandleReducer from "../components/post-handle-reducer";

const PostContext = createContext({
  posts: [],
  addPost: () => {},
  addInitialPosts: () => {},
  updatePost: () => {},
  deletePost: () => {},
});

const PostContextProvider = ({children}) => {
  const [posts, postReducer] = useReducer(postHandleReducer, []);

  const addPost = (id, title, body, tags, reactions={likes: 0, dislikes: 0, comments: [], shares: 0}, views=0, images=[]) => {
    const addPostAction = {
      type: "ADD_POST",
      payload: {
        id, title, body, tags, reactions, views, images
      }
    };
    postReducer(addPostAction);
  }

  const addInitialPosts = (posts) => {
    const addInitialPostAction = {
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      }
    };
    postReducer(addInitialPostAction);
  }

  const updatePost = (id, title, body, tags, images=[]) => {
    const updatePostAction = {
      type: "UPDATE_POST",
      payload: {
        id, title, body, tags, images
      }
    };
    postReducer(updatePostAction);
  }

  const deletePost = (id) => {
    const deletePostAction = {
      type: "DELETE_POST",
      payload: {id}
    };
    postReducer(deletePostAction);
  }

  return (
    <PostContext.Provider
      value={{ posts, addPost, addInitialPosts, updatePost, deletePost }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostContext, PostContextProvider };

