import Navbar from "./Navbar";
import "./style.css";

function Header({ appTitle }) {
  return (
    <div className="header">
      <h2 className="app-title">{appTitle}</h2>
      <Navbar />
    </div>
  );
}

export default Header;
