import style from "./css/Display.module.css";

function Display({ display }) {

  return (
    <div className={style["display"]}>
      <input
        type="text"
        name="display-input"
        id={style["display-input"]}
        value={display}
        readOnly
      />
    </div>
  );
}

export default Display;
