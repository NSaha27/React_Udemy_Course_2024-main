import style from "./css/Button.module.css";

function Button({ btnValue, handleClick }) {
  return (
    <button className={style["btn"]} onClick={handleClick}>
      {btnValue}
    </button>
  );
}

export default Button;
