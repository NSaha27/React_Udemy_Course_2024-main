import "./style.css";

function Header({ appName, image1, image2 }) {
  return (
    <div className="header">
      <img src={"images/" + image1} alt="Tree" />
      <h1 className="logo">{appName}</h1>
      <img src={"images/" + image2} alt="bag" />
    </div>
  );
}

export default Header;
