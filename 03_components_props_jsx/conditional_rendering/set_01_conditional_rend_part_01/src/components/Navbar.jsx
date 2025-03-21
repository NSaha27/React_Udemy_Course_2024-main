import "../../public/css/style.css";

function Navbar(){
  return <div className="navbar">
    <h2 className="logo">Restaurant</h2>
    <ul className="navbar-nav">
      <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
      <li className="nav-item"><a href="#menu" className="nav-link">Menu</a></li>
      <li className="nav-item"><a href="#order" className="nav-link">Order</a></li>
    </ul>
  </div>
}

export default Navbar;