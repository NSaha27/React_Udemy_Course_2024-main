import "./style.css";

function Footer(){
  const curHour = new Date().getHours();
  const openHour = 10;
  const closeHour = 10;
  return <footer>
    <h4>we're {curHour >= openHour && curHour <= closeHour? "open" : "close"} now!</h4>
    <p>copyright, all rights reserved!</p>
  </footer>
}

export default Footer;