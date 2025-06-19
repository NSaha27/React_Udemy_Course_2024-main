import css from "./css/Header.module.css";

function Header({appName, subTitle}){
  return <header className={css["header"]}>
    <span className={css["app-name-container"]}>
      <h1 className={css["app-name"]}>{appName}</h1>
    </span>
    <p className={css["subtitle"]}>{subTitle}</p>
  </header>
}

export default Header;