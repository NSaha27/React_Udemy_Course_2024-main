import { useContext } from "react";
import ThemeContext from "../store/page-theme-store";
import css from "./css/Button.module.css";

function Button({children}){
  const theme = useContext(ThemeContext);
  return <button className={`${css["btn"]} ${css["button-" + (theme === "light" ? "dark" : "light")]}`}>{children}</button>
}

export default Button;