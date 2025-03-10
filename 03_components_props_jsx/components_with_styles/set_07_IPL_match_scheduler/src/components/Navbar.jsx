function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Matches
          </a>
        </li>
        <li className="nav-item">
          <a href="/table" className="nav-link">
            Table
          </a>
        </li>
        <li className="nav-item">
          <a href="/players" className="nav-link">
            Players
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
