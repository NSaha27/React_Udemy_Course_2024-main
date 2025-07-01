import { useContext } from "react";
import { WiDaySunny } from "react-icons/wi";
import ThemeContext from "../store/page-theme-store";
import Button from "./Button";
import css from "./css/Navbar.module.css";

function Navbar({onThemeChange}){
  const theme = useContext(ThemeContext);
  return <nav className={`${css["navbar"]} bg-${theme === "light" ? "dark" : "light"}}`}>
      <h2 className={`${css["logo"]} text-${theme === "light" ? "dark" : "light"}`}>Navbar</h2>
      <ul className={css["navbar-nav"]}>
        <li className=""><a href="/" className={`text-${theme === "light" ? "dark" : "light"}`}>Home</a></li>
        <li className=""><a href="" className={`text-${theme === "light" ? "dark" : "light"}`}>Services</a></li>
        <li className=""><Button>Sign up</Button></li>
        <li className=""><Button>Log in</Button></li>
        <li className=""><WiDaySunny className={`text-${theme === "light" ? "dark" : "light"}`} onClick={onThemeChange} /></li>
      </ul>
    </nav>
}

export default Navbar;