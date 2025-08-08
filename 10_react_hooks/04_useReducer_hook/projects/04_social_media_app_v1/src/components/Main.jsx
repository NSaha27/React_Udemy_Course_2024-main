import { useContext, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { LoginUserContext } from "../store/login-user-context";
import { UserContext } from "../store/user-context";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import DisplayPost from "./DisplayPosts";
import Sidebar from "./Sidebar";
import Sponsor from "./Sponsor";

function Main({ loginSignupStatus }) {
  const { loginUser } = useContext(LoginUserContext);
  const { users, addPost } = useContext(UserContext);
  const [displayAddPostForm, setDisplayAddPostForm] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    title: "",
    desc: "",
    images: null,
  });

  function handleCreatePost() {
    setFormData((prev) => {
      return {
        ...prev,
        username: loginUser,
      };
    }); // setting username automatically
    setDisplayAddPostForm(true);
  }

  function handleAddPostInputChange(ev) {
    const { name, value, files } = ev.target;
    if (name === "images") {
      setFormData({ ...formData, [name]: files[0] || [] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  function handleAddPostFormSubmit(ev) {
    ev.preventDefault();
    if (!formData.title.trim() || !formData.desc.trim()) {
      alert("*** Title and Description are required!");
      return;
    }
    addPost(formData.username, formData.title, formData.desc, formData.images);
    setDisplayAddPostForm(false);
    setFormData({
      username: "",
      title: "",
      desc: "",
      images: [],
    });

    // closing modal manually
    const modalEl = document.getElementById("exampleModal");
    const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
    modalInstance.hide();
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
                <div className="modal-dialog modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Create a post
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form
                        action="#"
                        method="post"
                        onSubmit={handleAddPostFormSubmit}
                      >
                        <input
                          type="hidden"
                          name="username"
                          value={formData.username}
                        />
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            name="title"
                            placeholder="name@example.com"
                            value={formData.title}
                            onChange={handleAddPostInputChange}
                          />
                          <label htmlFor="floatingInput">Post Title</label>
                        </div>
                        <div className="form-floating mb-3">
                          <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            name="desc"
                            id="floatingTextarea2"
                            style={{ height: "150px" }}
                            value={formData.desc}
                            onChange={handleAddPostInputChange}
                          ></textarea>
                          <label htmlFor="floatingTextarea2">Your Post</label>
                        </div>
                        <div className="input-group mb-3">
                          <input
                            type="file"
                            className="form-control"
                            name="images"
                            id="inputGroupFile03"
                            aria-describedby="inputGroupFileAddon03"
                            aria-label="Upload"
                            onChange={handleAddPostInputChange}
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="inputGroupFileAddon03"
                          >
                            Upload
                          </button>
                        </div>
                        <div className="mt-1">
                          <button
                            type="submit"
                            className="btn btn-primary ml-2"
                          >
                            Post
                          </button>
                        </div>
                      </form>
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
