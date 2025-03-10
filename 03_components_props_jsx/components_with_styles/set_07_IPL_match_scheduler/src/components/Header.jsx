import "../assets/css/style.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <div className="logo-pagetitle">
        <img src="images/ipl_logo.png" alt="IPL Logo" />
        <div>
          <h2 className="title">Indian Premier League</h2>
          <h4>{new Date().getFullYear()} Season</h4>
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
