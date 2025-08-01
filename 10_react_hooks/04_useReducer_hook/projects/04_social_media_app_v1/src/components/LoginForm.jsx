import { useContext, useState } from "react";
import {LoginUserContext} from "../store/login-user-context";
import { UserContext } from "../store/user-context";

import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm() {
  const { users } = useContext(UserContext);
  const { setLoginUser } = useContext(LoginUserContext);
  const [formData, setFormData] = useState({});

  function handleChange(ev) {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleLogin(ev) {
    ev.preventDefault();
    try {
      const isUserFound = users.find((user) => user.username === formData.username && user.password === formData.password);
      if(isUserFound){
        setLoginUser(formData.username);
        console.log("log in successful!");
      }else{
        console.log("log in failed, no such user exists!");
      }
    } catch (err) {
      console.log(`log in failed, error: ${err.message}`);
    }
  }

  return (
    <div className="form-signin w-100 m-auto">
      <form action={"#"} method={"POST"} onSubmit={handleLogin}>
        {" "}
        <h1 className="h3 mb-3 fw-normal">Please log in</h1>{" "}
        <div className="form-floating">
          {" "}
          <input
            type="text"
            className="form-control"
            id="username"
            name={"username"}
            placeholder="enter your username"
            onChange={handleChange}
          />{" "}
          <label htmlFor="username">Username</label>{" "}
        </div>{" "}
        <div className="form-floating mt-3">
          {" "}
          <input
            type="password"
            className="form-control"
            id="password"
            name={"password"}
            placeholder="enter your password"
            onChange={handleChange}
          />{" "}
          <label htmlFor="password">Password</label>{" "}
        </div>{" "}
        <div className="form-check text-start my-3">
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
