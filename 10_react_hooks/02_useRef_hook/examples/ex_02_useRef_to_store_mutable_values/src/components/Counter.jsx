import { useEffect, useRef, useState } from "react";

function Counter(){
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  function handleIncrement(){
    setCount(curCount => curCount + 1);
  }
  function handleDecrement(){
    setCount(curCount => {
      if(curCount > 0) return curCount - 1;
    })
  }

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return <div className="counter">
    <p>Current value: {count}</p>
    <p>Previous value: {prevCount.current}</p>
    <p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </p>
  </div>
}

export default Counter;