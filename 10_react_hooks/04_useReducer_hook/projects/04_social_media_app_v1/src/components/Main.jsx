import { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import LoginUserContext from "../store/login-user-context";
import { UserContext } from "../store/user-context";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

// import DisplayPost from "./DisplayPosts";
import Sidebar from "./Sidebar";
import Sponsor from "./Sponsor";

function Main({ loginSignupStatus }) {
  const { loginUser } = useContext(LoginUserContext);
  const isLoggedIn = loginUser.length > 0 ? true : false;
  const { listOfUsers } = useContext(UserContext);
  console.log(listOfUsers);
  
  
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
              listOfUsers.length > 0 && 
              listOfUsers.map(user => {
                if(user.username === loginUser){
                  <DisplayPost user={user.name} post={user.posts} />
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
