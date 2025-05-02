import React, { useState } from "react";

import MyButton02 from "./MyButton02";

function MyApp02() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((c) => c + 1);
  }
  return (
    <React.Fragment className="my-app-compo-2">
      <MyButton02 count={count} onClick={handleClick} />
      <MyButton02 count={count} onClick={handleClick} />
    </React.Fragment>
  );
}

export default MyApp02;
