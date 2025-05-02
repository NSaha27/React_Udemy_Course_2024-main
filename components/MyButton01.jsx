import { useState } from "react";

function MyButton01() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((c) => c + 1);
  }

  return (
    <button className="btn btn-success" onClick={handleClick}>
      Clicked me for {count} times!
    </button>
  );
}

export default MyButton01;
