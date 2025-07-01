import { useState } from "react";
import ThemeContext from "./store/page-theme-store";

import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  const [theme, setTheme] = useState("light");

  function handleThemeChangeBtnClick(){
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

  return (
    <>
      <ThemeContext value={theme}>
        <Navbar onThemeChange={handleThemeChangeBtnClick} />
        <Main />
      </ThemeContext>
    </>
  )
}

export default App
