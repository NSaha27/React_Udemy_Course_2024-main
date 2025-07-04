import { useState } from "react";
import Panel from "./components/Panel";
import Form from "./components/Form";
import ThemeContext from "./store/theme-storage";
import LoginUserContext from "./store/login-user-storage";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  function toggleTheme(ev) {
    setTheme(ev.target.checked ? "dark" : "light");
  }
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <LoginUserContext.Provider
          value={{ username: "NILADRISAHA", password: "Niladri@12345" }}
        >
          <Panel title={"Welcome to Log in"}>
            <Form />
            <div className="">
              <label htmlFor="" className="">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className=""
                  checked={theme === "dark"}
                  onChange={toggleTheme}
                />{" "}
                <span className={`text-${theme === "dark" ? "light" : "dark"}`}>
                  Use {theme === "dark" ? "light" : "dark"} mode
                </span>
              </label>
            </div>
          </Panel>
        </LoginUserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
