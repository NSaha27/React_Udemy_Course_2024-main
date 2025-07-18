import "bootstrap/dist/css/bootstrap.min.css";

function Sponsor() {
  return (
    <div
      className="section col-lg-3 d-none d-md-flex flex-column flex-shrink-0 p-3 text-bg-dark border border-top-2"
      style={{ minHeight: "90vh" }}
    >
      {" "}
      <ul className="nav nav-pills flex-column mb-auto">
        {" "}
        <li className="nav-item">sponsor 1</li>
        <li className="nav-item">sponsor 2</li>
      </ul>{" "}
      <hr />
    </div>
  );
}

export default Sponsor;
