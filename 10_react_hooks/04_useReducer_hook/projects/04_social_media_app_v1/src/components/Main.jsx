import { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import LoginUserContext from "../store/login-user-context";
import { UserContext } from "../store/user-context";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import DisplayPost from "./DisplayPosts";
import Sidebar from "./Sidebar";
import Sponsor from "./Sponsor";

function Main({ loginSignupStatus }) {
  const { loginUser } = useContext(LoginUserContext);
  const isLoggedIn = loginUser.length > 0 ? true : false;
  const { users } = useContext(UserContext);
  console.log(users);
  
  
  return (
    <main className="row position-relative">
      <Sidebar />
      <div
        className="section col-lg-7 d-flex align-items-center p-5"
        style={{ minHeight: "90vh" }}
      >
        {isLoggedIn ? (
          <>
            <div className="create-post"></div>
            {
              users.length > 0 && 
              users.map(user => {
                if(user.username === loginUser){
                  return <DisplayPost user={user.name} posts={user.posts} key={user.username} />
                }
              })
            }
          </>
        ) : loginSignupStatus === "login" ? (
          <LoginForm />
        ) : (
          <SignupForm />
        )}
      </div>
      <Sponsor />
    </main>
  );
}

export default Main;
