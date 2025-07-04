import { useContext } from "react";
import ThemeContext from "../store/theme-storage";
import css from "./css/Button.module.css";

function Button({ btnType, children }) {
  const theme = useContext(ThemeContext);
  return (
    <button
      type={btnType}
      className={`${css["bg-" + theme]} ${
        css["text-" + (theme === "dark" ? "light" : "dark")]
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
