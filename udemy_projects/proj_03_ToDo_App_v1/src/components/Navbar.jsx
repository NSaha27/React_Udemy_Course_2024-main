import style from "./css/Navbar.module.css";

function Navbar() {
  return (
    <nav className={style["navbar"]}>
      <h2 className={style["logo"]}>ToDo</h2>
    </nav>
  );
}

export default Navbar;
