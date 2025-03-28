import Navbar from "./Navbar";
import "./style.css";

function Header(props) {
  return (
    <div className="header">
      <h2 className="app-title">{props.appTitle}</h2>
      <Navbar />
    </div>
  );
}

export default Header;
