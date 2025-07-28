import { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import LoginStatusContext from "../store/login-status-context";
import { UserContext } from "../store/user-context";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import DisplayPost from "./DisplayPosts";
import Sidebar from "./Sidebar";
import Sponsor from "./Sponsor";

function Main({ loginSignupStatus }) {
  const { loginStatus } = useContext(LoginStatusContext);
  const isLoggedIn = loginStatus;
  const { users } = useContext(UserContext);
  
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
            {users.map((user) => {
              if (user.username === username) {
                return <DisplayPost user={user.name} post={user.posts} />;
              }
            })}
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
