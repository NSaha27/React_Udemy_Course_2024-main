import css from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={css.navbar}>
      <h2 className={css.logo}>Logo</h2>
      <ul className={css["navbar-nav"]}>
        <li className={css["nav-item"]}>
          <a href="#" className={css["nav-link"]}>
            Home
          </a>
        </li>
        <li className={css["nav-item"]}>
          <a href="#" className={css["nav-link"]}>
            Blogs
          </a>
        </li>
        <li className={css["nav-item"]}>
          <a href="#" className={css["nav-link"]}>
            News
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
