import { useContext, useState } from "react";
import LoginUserContext from "../store/login-user-storage";
import ThemeContext from "../store/theme-storage";
import Button from "./Button";
import css from "./css/Form.module.css";

function Form() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [component, setComponent] = useState(null);
  const { username, password } = useContext(LoginUserContext);
  const theme = useContext(ThemeContext);

  function handleInputs(ev) {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(ev) {
    ev.preventDefault();

    if (formData.username === username && formData.password === password) {
      setComponent(
        <div className={css["bg-" + theme]}>
          <h5 className={css["text-" + (theme === "dark" ? "light" : "dark")]}>
            you're now logged in as {username}!
          </h5>
        </div>
      );
    }
  }

  return (
    <>
      {component === null ? (
        <div className={css["bg-" + theme]}>
          <form
            action=""
            method="post"
            className=""
            onSubmit={handleFormSubmit}
          >
            <div className="">
              <div className="">
                <label
                  htmlFor="username"
                  className={
                    css["text-" + (theme === "dark" ? "light" : "dark")]
                  }
                >
                  Username
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="username"
                  id="username"
                  className={`${css["bg-" + theme]} ${
                    css["text-" + (theme === "dark" ? "light" : "dark")]
                  }`}
                  onChange={handleInputs}
                />
              </div>
              <div className="">
                <label
                  htmlFor="password"
                  className={
                    css["text-" + (theme === "dark" ? "light" : "dark")]
                  }
                >
                  Password
                </label>{" "}
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={`${css["bg-" + theme]} ${
                    css["text-" + (theme === "dark" ? "light" : "dark")]
                  }`}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div className="">
              <Button btnType="submit">Log in</Button>
              <span
                className={css["text-" + (theme === "dark" ? "light" : "dark")]}
              >
                {" "}
                Fill in both fields
              </span>
            </div>
          </form>
        </div>
      ) : (
        component
      )}
    </>
  );
}

export default Form;
