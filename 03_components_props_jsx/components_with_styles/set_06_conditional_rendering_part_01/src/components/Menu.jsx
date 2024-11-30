import "../../public/css/style.css";
import Item from "./Item";

function Menu(props){
  return <div id="menu">
    <h2 className="title"><span>Menu</span></h2>
    <div className="itemList">
      {
        props.itemList.map((item, indx, arr) => {
          return <Item key={indx} item={item} />
        })
      }
    </div>
  </div>
}

export default Menu;