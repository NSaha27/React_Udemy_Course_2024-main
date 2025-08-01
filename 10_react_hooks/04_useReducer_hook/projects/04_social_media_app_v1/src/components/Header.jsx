import { BsPostcard } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOutlineVideoSettings } from "react-icons/md";

import { useContext } from "react";
import { ActiveTabContext } from "../store/active-tab-context";
import { LoginUserContext } from "../store/login-user-context";

import "bootstrap/dist/css/bootstrap.min.css";

function Header({ setLoginSignupStatus }) {
  const { activeTab, setActiveTab } = useContext(ActiveTabContext);
  const { loginUser, setLoginUser } = useContext(LoginUserContext);

  function handleClick(ev) {
    const tab = ev.target.parentNode.attributes[5].nodeValue.toLowerCase();
    setActiveTab(tab);
  }

  function handleLogOut(ev) {
    ev.preventDefault();
    setLoginUser("");
  }

  return (
    <>
      {loginUser.length === 0 ? (
        <header className="p-3 text-bg-dark">
          {" "}
          <div className="container-fluid">
            {" "}
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              {" "}
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                {" "}
                <li>
                  <a
                    href="#"
                    className={`nav-link link-${
                      activeTab === "home" ? "primary" : "light"
                    } fs-4 mx-3`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-title="Home"
                    value="Home"
                    onClick={(ev) => handleClick(ev)}
                  >
                    <IoHomeOutline />
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#"
                    className={`nav-link link-${
                      activeTab === "posts" ? "primary" : "light"
                    } fs-4 mx-3`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-title="Posts"
                    value="Posts"
                    onClick={(ev) => handleClick(ev)}
                  >
                    <BsPostcard />
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#"
                    className={`nav-link link-${
                      activeTab === "watch" ? "primary" : "light"
                    } fs-4 mx-3`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-title="Watch"
                    value="Watch"
                    onClick={(ev) => handleClick(ev)}
                  >
                    <MdOutlineVideoSettings />
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#"
                    className={`nav-link link-${
                      activeTab === "friends" ? "primary" : "light"
                    } fs-4 mx-3`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-title="Friends"
                    value="Friends"
                    onClick={(ev) => handleClick(ev)}
                  >
                    <LiaUserFriendsSolid />
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#"
                    className={`nav-link link-${
                      activeTab === "notifications" ? "primary" : "light"
                    } fs-4 mx-3`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-title="Notifications"
                    value="Notifications"
                    onClick={(ev) => handleClick(ev)}
                  >
                    <IoIosNotificationsOutline />
                  </a>
                </li>{" "}
              </ul>{" "}
              <form
                className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                role="search"
              >
                {" "}
                <input
                  type="search"
                  className="form-control form-control-dark text-bg-light"
                  placeholder="Search..."
                  aria-label="Search"
                />{" "}
              </form>{" "}
              <div className="text-end">
                {" "}
                <button
                  type="button"
                  className="btn btn-outline-light me-2"
                  onClick={() => setLoginSignupStatus("login")}
                >
                  Login
                </button>{" "}
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => setLoginSignupStatus("signup")}
                >
                  Sign-up
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </header>
      ) : (
        <header className="p-3 text-bg-dark">
          {" "}
          <div className="container-fluid">
            {" "}
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              {" "}
              <a
                href="/"
                className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
              >
                {" "}
                <svg
                  className="bi me-2"
                  width="40"
                  height="32"
                  role="img"
                  aria-label="Bootstrap"
                >
                  <use xlinkHref="#bootstrap"></use>
                </svg>{" "}
              </a>{" "}
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                {" "}
                <li>
                  <a
                    href="#"
                    className={`nav-link link-${
                      activeTab === "home" ? "primary" : "light"
                    } fs-4 mx-2`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-title="Home"
                    value="Home"
                    onClick={(ev) => handleClick(ev)}
                  >
                    <IoHomeOutline />
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#"
                    className={`nav-link link-${
                      activeTab === "posts" ? "primary" : "light"
                    } fs-4 mx-2`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-title="Posts"
                    value="Posts"
                    onClick={(ev) => handleClick(ev)}
                  >
                    <BsPostcard />
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#"
                    className={`nav-link link-${
                      activeTab === "watch" ? "primary" : "light"
                    } fs-4 mx-2`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-title="Watch"
                    value="Watch"
                    onClick={(ev) => handleClick(ev)}
                  >
                    <MdOutlineVideoSettings />
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#"
                    className={`nav-link link-${
                      activeTab === "friends" ? "primary" : "light"
                    } fs-4 mx-2`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-title="Friends"
                    value="Friends"
                    onClick={(ev) => handleClick(ev)}
                  >
                    <LiaUserFriendsSolid />
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#"
                    className={`nav-link link-${
                      activeTab === "notifications" ? "primary" : "light"
                    } fs-4 mx-2`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-title="Notifications"
                    value="Notifications"
                    onClick={(ev) => handleClick(ev)}
                  >
                    <IoIosNotificationsOutline />
                  </a>
                </li>{" "}
              </ul>{" "}
              <form
                className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                role="search"
              >
                {" "}
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                />{" "}
              </form>{" "}
              <div className="dropdown text-end">
                {" "}
                <a
                  href="#"
                  className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  <img
                    src="https://github.com/mdo.png"
                    alt="mdo"
                    width="32"
                    height="32"
                    className="rounded-circle"
                  />{" "}
                </a>{" "}
                <ul
                  className="dropdown-menu text-small hide"
                  style={{
                    position: "absolute",
                    inset: "0px auto auto 0px",
                    margin: "4px 0px 0px -96px",
                    transform: "translate(0px, 34px)",
                  }}
                >
                  {" "}
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>{" "}
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>{" "}
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>{" "}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>{" "}
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleLogOut}
                    >
                      Log out
                    </a>
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </header>
      )}
    </>
  );
}

export default Header;
