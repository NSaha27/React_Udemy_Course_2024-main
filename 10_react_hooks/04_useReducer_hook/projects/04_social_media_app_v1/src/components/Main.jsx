import { useContext, useState } from "react";

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
                Create a post
              </button>
            </div>
            {displayAddPostForm && (
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

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
