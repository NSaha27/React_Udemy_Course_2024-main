import "bootstrap/dist/css/bootstrap.min.css";

import Item from "./Item";

function LogicalAND({ topicList }) {
  return (
    <>
      {topicList.length > 0 && (
        <ul className="list-group">
          {topicList.map((topic, indx) => {
            return <Item topic={topic} key={indx} />;
          })}
        </ul>
      )}
    </>
  );
}

export default LogicalAND;
