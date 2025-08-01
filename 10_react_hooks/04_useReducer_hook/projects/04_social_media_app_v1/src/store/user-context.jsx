import { createContext, useReducer } from "react";
import userHandleReducer from "../components/user-handle-reducer";

const UserContext = createContext({
  users: [],
  addUser: () => {},
  updateUser: () => {},
  deleteUser: () => {},
});

// USERS
const userList = [
  {
    username: "NILADRISAHA",
    name: "Niladri Saha",
    gender: "male",
    education: [
      {
        degree: "B.Com",
        institution: "University of Calcutta",
      },
    ],
    jobs: [
      {
        role: "Subject matter expert",
        company: "Chegg India Pvt. Ltd.",
      },
      {
        role: "Full stack developer",
        company: "Geotech Infoservices",
      },
    ],
    address: "Howrah",
    phone: "+918420520494",
    email: "niladri.saha25@gmail.com",
    password: "Niladri@12345",
    posts: [
      {
        id: 0,
        title: "My college convocation event",
        desc: "It is 6th July, 2012, I just got the graduation completion certificate from my college",
        images: ["college_convocation_1.jpg"],
        likes: 1,
        shares: 2,
        comments: [],
      },
    ],
  },
  {
    username: "TISTADUTTA",
    name: "Tista Dutta",
    gender: "female",
    education: [
      {
        degree: "B.Tech(elec.)",
        institution: "MAKAUT",
      },
    ],
    jobs: [
      {
        role: "Backend developer",
        company: "DreamzTech Solutions",
      },
      {
        role: "Quality assurance analyst",
        company: "CODECLOUDS",
      },
    ],
    address: "Serampore",
    phone: "+919163532961",
    email: "tista.dutta07@gmail.com",
    password: "Tista@12345",
    posts: [
      {
        id: 0,
        title: "My college convocation event",
        desc: "It is 15th July 2016, I got the graduation completion certificate from my college",
        images: ["college_convocation_1.jpg"],
        likes: 1,
        shares: 2,
        comments: [],
      },
    ],
  },
];

const UserContextProvider = ({children}) => {
  const [users, userDispatcher] = useReducer(userHandleReducer, userList);

  const addUser = (
    username,
    name,
    gender,
    address,
    phone,
    email,
    password,
    education = [],
    jobs = [],
    posts = []
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
        jobs,
        posts,
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
    jobs = [],
    posts = []
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
        jobs,
        posts,
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

  return (
    <UserContext.Provider
      value={{ users, addUser, updateUser, deleteUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
