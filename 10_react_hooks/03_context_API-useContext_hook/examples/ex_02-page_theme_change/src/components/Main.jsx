import { useContext } from "react";
import ThemeContext from "../store/page-theme-store";
import css from "./css/Main.module.css";

function Main(){
  const theme = useContext(ThemeContext);
  return <main className={`${css["main"]} bg-${theme}`}>
      <section className={css["sec"]}>
        <h1 className={`${css["text-dark"]}`}>Home page</h1>
      </section>
    </main>
}

export default Main;