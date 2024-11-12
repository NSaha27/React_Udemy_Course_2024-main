import { createRoot } from "react-dom/client";

function Navigation(){
  return <nav className="navbar">
  <h2 className="logo">Logo</h2>
  <ul className="menu">
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>
    <li>
      <a href="/services">Services</a>
    </li>
    <li>
      <a href="/login">Register/Login</a>
    </li>
  </ul>
  </nav>
}

const root = createRoot(document.getElementById("root"));
root.render(<Navigation/>);
