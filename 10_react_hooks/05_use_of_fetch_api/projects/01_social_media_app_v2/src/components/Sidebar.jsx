import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";

import { ActiveTabContext } from "../store/active-tab-context";
import { LoginUserContext } from "../store/login-user-context";

function Sidebar() {
  const { activeTab, setActiveTab } = useContext(ActiveTabContext);
  const { loginUser } = useContext(LoginUserContext);

  function handleClick(ev) {
    const tab = ev.target.innerText.toLowerCase();
    setActiveTab(tab);
  }

  return (
    <div
      className="section col-lg-2 d-none d-md-flex flex-column flex-shrink-0 px-3 text-bg-dark border border-top-3"
      style={{ minHeight: "90vh" }}
    >
      <div className="w-100 py-3 d-lg-none d-flex justify-content-end">
        <button className="fs-5 btn btn-outline-light">&times;</button>
      </div>{" "}
      <ul className="nav nav-pills flex-column mb-auto mt-lg-4">
        {" "}
        <li className="nav-item">
          {" "}
          <a
            href="#"
            className={`nav-link ${
              activeTab === "home" ? "active" : "text-light"
            }`}
            aria-current="page"
            onClick={(ev) => handleClick(ev)}
          >
            {" "}
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>{" "}
        </li>{" "}
        {loginUser.length > 0 && (
          <>
            <li>
              {" "}
              <a
                href="#"
                className={`nav-link ${
                  activeTab === "posts" ? "active" : "text-light"
                }`}
                onClick={(ev) => handleClick(ev)}
              >
                {" "}
                <svg
                  className="bi pe-none me-2"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use xlinkHref="#speedometer2"></use>
                </svg>
                My Posts
              </a>{" "}
            </li>{" "}
          </>
        )}
      </ul>{" "}
      <hr />
    </div>
  );
}

export default Sidebar;
