import Item from "./Item";

function MainContent(props) {
  return (
    <div className="main">
      <div className="item-list">
        {props.items.map((item, index, arr) => {
          return <Item key={index} itemObj={item} />;
        })}
      </div>
    </div>
  );
}

export default MainContent;
