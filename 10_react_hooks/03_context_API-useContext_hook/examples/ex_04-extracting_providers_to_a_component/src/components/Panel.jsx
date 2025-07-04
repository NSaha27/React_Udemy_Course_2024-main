import { useContext } from "react";
import ThemeContext from "../store/theme-storage";
import css from "./css/Panel.module.css";

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  return (
    <section className={css["bg-" + theme]}>
      <h2 className={css["text-" + (theme === "dark" ? "light" : "dark")]}>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default Panel;
