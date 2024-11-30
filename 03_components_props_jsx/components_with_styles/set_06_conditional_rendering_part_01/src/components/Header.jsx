import "../../public/css/style.css";
import Navbar from "./Navbar";

function Header(props){
  return <div id="header" bgImg={props.bgImg}>
    <Navbar />
  </div>
}

export default Header;