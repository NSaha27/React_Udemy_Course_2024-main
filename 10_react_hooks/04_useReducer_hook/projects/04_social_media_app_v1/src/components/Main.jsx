import { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { LoginUserContext } from "../store/login-user-context";
import { UserContext } from "../store/user-context";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import DisplayPost from "./DisplayPosts";
import Sidebar from "./Sidebar";
import Sponsor from "./Sponsor";

function Main({ loginSignupStatus }) {
  const { loginUser } = useContext(LoginUserContext);
  const { users } = useContext(UserContext);

  function handleCreatePost(ev) {
    // do something
  }

  return (
    <main className="row position-relative">
      <Sidebar />
      <div
        className="section col-lg-7 d-flex flex-column align-items-center p-5"
        style={{ minHeight: "90vh" }}
      >
        {loginUser.length > 0 ? (
          <>
            <div className="w-75 mx-auto mb-4 d-block">
              <button
                className="btn btn-md btn-success float-end"
                onClick={handleCreatePost}
              >
                Create a post
              </button>
            </div>
            {users.length > 0 &&
              users.map((user) => {
                return (
                  <DisplayPost
                    user={user.name}
                    posts={user.posts}
                    key={user.username}
                  />
                );
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
