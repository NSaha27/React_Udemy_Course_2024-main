import { useContext, useState } from "react";
import { IoArrowBack } from "react-icons/io5";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ActiveTabContext } from "../store/active-tab-context";
import { LoginUserContext } from "../store/login-user-context";
import { UserContext } from "../store/user-context";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import AddPost from "./AddPost";
import DisplayPost from "./DisplayPosts";
import Sidebar from "./Sidebar";
import Sponsor from "./Sponsor";

function Main({ loginSignupStatus }) {
  const { loginUser } = useContext(LoginUserContext);
  const { users } = useContext(UserContext);
  const {activeTab} = useContext(ActiveTabContext);
  const [displayAddPostForm, setDisplayAddPostForm] = useState(false);

  function handleCreatePost() {
    setDisplayAddPostForm(!displayAddPostForm);
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
                type="button"
                className="btn btn-success float-end"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={handleCreatePost}
              >
                {displayAddPostForm
                  ? (
                      <span>
                        <IoArrowBack /> Back
                      </span>
                    )
                  : "Create a post"}
              </button>
            </div>
            {displayAddPostForm ? (
              <AddPost setDisplayAddPostForm={setDisplayAddPostForm} />
            ) : (
              <>
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
            )}
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
