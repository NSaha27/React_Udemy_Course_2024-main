import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";

import { ActiveTabContext } from "../store/active-tab-context";

function Sidebar() {
  const { activeTab, setActiveTab } = useContext(ActiveTabContext);
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
            Posts
          </a>{" "}
        </li>{" "}
        <li>
          {" "}
          <a
            href="#"
            className={`nav-link ${
              activeTab === "events" ? "active" : "text-light"
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
            Events
          </a>{" "}
        </li>{" "}
        <li>
          {" "}
          <a
            href="#"
            className={`nav-link ${
              activeTab === "watch" ? "active" : "text-light"
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
            Watch
          </a>{" "}
        </li>{" "}
        <li>
          {" "}
          <a
            href="#"
            className={`nav-link ${
              activeTab === "saved" ? "active" : "text-light"
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
            Saved
          </a>{" "}
        </li>{" "}
      </ul>{" "}
      <hr />
    </div>
  );
}

export default Sidebar;
