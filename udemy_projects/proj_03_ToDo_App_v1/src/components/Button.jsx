import style from "./css/Button.module.css";

function Button({ type, btnBgColor, btnTitle }) {
  return (
    <button
      type={type}
      className={style["btn"]}
      style={{ backgroundColor: btnBgColor }}
    >
      {btnTitle}
    </button>
  );
}

export default Button;
