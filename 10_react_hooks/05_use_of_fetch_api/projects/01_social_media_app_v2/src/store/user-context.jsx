import { createContext, useReducer } from "react";
import userHandleReducer from "../components/user-handle-reducer";

const UserContext = createContext({
  users: [],
  addUser: () => {},
  updateUser: () => {},
  deleteUser: () => {}
});

const UserContextProvider = ({ children }) => {
  const [users, userDispatcher] = useReducer(userHandleReducer, []);

  const addUser = (
    username,
    name,
    gender,
    address,
    phone,
    email,
    password,
    education = [],
    jobs = []
  ) => {
    const addUserAction = {
      type: "ADD_USER",
      payload: {
        username,
        name,
        gender,
        address,
        phone,
        email,
        password,
        education,
        jobs
      },
    };
    userDispatcher(addUserAction);
  };
  const updateUser = (
    username,
    name,
    gender,
    address,
    phone,
    email,
    password,
    education = [],
    jobs = []
  ) => {
    const updateUserAction = {
      type: "UPDATE_USER",
      payload: {
        username,
        name,
        gender,
        address,
        phone,
        email,
        password,
        education,
        jobs
      },
    };
    userDispatcher(updateUserAction);
  };
  const deleteUser = (username) => {
    const deleteUserAction = {
      type: "DELETE_USER",
      payload: {
        username,
      },
    };
    userDispatcher(deleteUserAction);
  };
  const addPost = (
    username,
    title,
    desc,
    images = [],
    likes = 0,
    shares = 0,
    comments = []
  ) => {
    const addPostAction = {
      type: "ADD_POST",
      payload: {
        username,
        title,
        desc,
        images,
        likes,
        shares,
        comments,
      },
    };
    userDispatcher(addPostAction);
  };
  const updatePost = (username, postId, title, desc, images = []) => {
    const updatePostAction = {
      type: "UPDATE_POST",
      payload: {
        username,
        postId,
        title,
        desc,
        images,
      },
    };
    userDispatcher(updatePostAction);
  };
  const deletePost = (username, postId) => {
    const deletePostAction = {
      type: "DELETE_POST",
      payload: {
        username,
        postId,
      },
    };
    userDispatcher(deletePostAction);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        updateUser,
        deleteUser,
        addPost,
        updatePost,
        deletePost,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };

