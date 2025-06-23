import css from "./css/Header.module.css";

function Header(){
  return <div className={css["header"]}>
    <span className={css["app-heading"]}>
      <h2 className="">Pizza Hut</h2>
    </span>
    <p className={css["sub-heading"]}>Order our delicious pizzas</p>
  </div>
}

export default Header;