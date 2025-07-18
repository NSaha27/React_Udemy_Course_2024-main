// import {useState} from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "./Sidebar";
import Sponsor from "./Sponsor";

function Main() {
  return (
    <main className="row position-relative">
      <Sidebar />
      <div className="section col-lg-7" style={{ minHeight: "90vh" }}>
        posts
      </div>
      <Sponsor />
    </main>
  );
}

export default Main;
