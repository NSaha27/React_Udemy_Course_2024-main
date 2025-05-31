import "bootstrap/dist/css/bootstrap.min.css";
import style from "./css/Header.module.css";

function Header({appTitle}){
  return <div className="header">
    <h1 className={style["app-title"]}>{appTitle}</h1>
  </div>
}

export default Header;