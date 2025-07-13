import css from "./css/Button.module.css";

function Button({onBtnClick, children}){
  return <button className={css["btn"]} onClick={onBtnClick}>{children}</button>
}

export default Button;