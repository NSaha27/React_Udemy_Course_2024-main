import "bootstrap/dist/css/bootstrap.min.css";

import Item from "./Item";

function Ternery({ topicList }) {
  return (
    <>
      {topicList.length > 0 ? (
        <ul className="list-group">
          {topicList.map((topic, indx) => {
            return <Item topic={topic} key={indx} />;
          })}
        </ul>
      ) : (
        <h2>no topic is found!</h2>
      )}
    </>
  );
}

export default Ternery;
