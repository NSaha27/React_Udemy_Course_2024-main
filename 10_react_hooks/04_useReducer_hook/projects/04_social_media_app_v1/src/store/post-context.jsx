import { createContext } from "react";

const PostContext = createContext({
  posts: [],
  addPost: () => {},
  editPost: () => {},
  deletePost: () => {},
});

const PostContextProvider = ({ children }) => {};

export { PostContext, PostContextProvider };
