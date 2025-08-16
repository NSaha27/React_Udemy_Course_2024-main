import { useContext, useState } from "react";
import { LoginUserContext } from "../store/login-user-context";
import { PostContext } from "../store/post-context";
import { UserContext } from "../store/user-context";

import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm() {
  const { users, addInitialUsers } = useContext(UserContext);
  const { setLoginUser } = useContext(LoginUserContext);
  const { addInitialPosts } = useContext(PostContext);
  const [formData, setFormData] = useState({});

  function handleAddInitialUsers() {
    fetch("https://dummyjson.com/posts/userId")
      .then((res) => res.json())
      .then((data) => addInitialUsers(data));
  }

  function handleChange(ev) {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleLogin(ev) {
    ev.preventDefault();
    try {
      const isUserFound = users.find(
        (user) =>
          user.userId === formData.userId && user.password === formData.password
      );
      if (isUserFound) {
        setLoginUser(formData.userId);
        console.log("log in successful!");
        fetch("https://dummyjson.com/posts")
          .then((res) => res.json())
          .then((data) => addInitialPosts(data));
      } else {
        console.log("log in failed, no such user exists!");
      }
    } catch (err) {
      console.log(`log in failed, error: ${err.message}`);
    }
  }

  return (
    <div className="form-signin w-100 m-auto" onLoad={handleAddInitialUsers}>
      <form action={"#"} method={"POST"} onSubmit={handleLogin}>
        {" "}
        <div className="">
          <h1 className="h3 mb-3 fw-normal">Please log in</h1>
        </div>{" "}
        <div className="form-floating mb-3">
          {" "}
          <input
            type="text"
            className="form-control"
            id="userId"
            name={"userId"}
            placeholder="enter your user ID"
            onChange={handleChange}
          />{" "}
          <label htmlFor="username">User ID</label>{" "}
        </div>{" "}
        <div className="form-floating mb-3">
          {" "}
          <input
            type="password"
            className="form-control"
            id="password"
            name={"password"}
            placeholder="let the password be blank"
            onChange={handleChange}
          />{" "}
          <label htmlFor="password">Password</label>{" "}
        </div>{" "}
        <div className="form-check text-start mb-3">
          {" "}
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="checkDefault"
          />{" "}
          <label className="form-check-label" htmlFor="checkDefault">
            {" "}
            Remember me
          </label>{" "}
        </div>{" "}
        <button className="btn btn-primary w-100 py-2" type="submit">
          Log in
        </button>{" "}
      </form>
    </div>
  );
}

export default LoginForm;
