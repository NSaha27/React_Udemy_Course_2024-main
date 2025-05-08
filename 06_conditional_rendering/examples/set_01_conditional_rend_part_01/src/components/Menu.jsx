import "../../public/css/style.css";
import Item from "./Item";

function Menu(props){
  return <div id="menu">
    <h2 className="title"><span>Menu</span></h2>
    <div className="itemList">
      {
        // props.itemList.length > 0 &&
        // props.itemList.map((item, indx, arr) => {
        //   return <Item key={indx} item={item} />
        // })
        // ------- OR -------
        props.itemList.length > 0 ? 
        props.itemList.map((item, indx, arr) => {
          /*
          // conditionally display or hide any component
          if(item.isSoldOut){
            return null;
          }
          */
          return <Item key={indx} item={item} />
        }) : 
        <h2>Sorry, no food item is available now!</h2>
      }
    </div>
  </div>
}

export default Menu;