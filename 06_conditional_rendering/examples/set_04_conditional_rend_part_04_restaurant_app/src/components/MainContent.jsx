import Item from "./Item";

function MainContent({ items }) {
  return (
    <div className="main">
      <div className="item-list">
        {items.map((item, index, arr) => {
          return <Item key={index} itemObj={item} />;
        })}
      </div>
    </div>
  );
}

export default MainContent;
