import { BsPostcard } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOutlineVideoSettings } from "react-icons/md";

import { useContext } from "react";
import ActiveTabContext from "../store/active-tab-context";

import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const { activeTab, setActiveTab } = useContext(ActiveTabContext);
  const isLoggedIn = false;

  function handleClick(ev) {
    const tab = ev.target.parentNode.attributes[5].nodeValue.toLowerCase();
    setActiveTab(tab);
  }

  return (
    <div className="container-fluid bg-dark">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
        {" "}
        <div className="col-md-3 mb-2 mb-md-0">
          {" "}
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            {" "}
            <svg
              className="bi"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>{" "}
          </a>{" "}
        </div>{" "}
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
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
        {isLoggedIn ? (
          <div className="flex-shrink-0 dropdown">
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
            <ul className="dropdown-menu text-small shadow">
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
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>{" "}
            </ul>{" "}
          </div>
        ) : (
          <div className="col-md-3 text-end">
            {" "}
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>{" "}
            <button type="button" className="btn btn-warning">
              Sign-up
            </button>{" "}
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
