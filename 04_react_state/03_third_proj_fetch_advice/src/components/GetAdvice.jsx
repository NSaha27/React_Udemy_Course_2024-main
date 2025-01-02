import { useState } from "react";
import "./style.css";

function GetAdvice(props){
  const [advice, setAdvice] = useState(props.advices[0]);
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function changeAdvice(){
    if(count < props.advices.length){
      setAdvice(props.advices[count]);
      setCount(count + 1);
    }
  }

  function hideAdvice(){
    setIsOpen(false);
  }

  function showAdvice(){
    setIsOpen(true);
  }

  return <div className="card">
    {
      isOpen ?
      <>
        <div>
          <button className="closeBtn" onClick={hideAdvice}>&times;</button>
        </div>
        <div>
          <h1 className="advice">"{advice}"</h1>
          <p className="counter">You're now at advice no. <span>{count}</span></p>
          <button className="submitBtn" onClick={changeAdvice}>Get new advice</button>
        </div>
      </> :
      <>
        <div>
          <button className="openBtn" onClick={showAdvice}>+</button>
        </div>
        <div>
          <h1 className="advice">Please click on the above button to get advices</h1>
        </div>
      </>
    }
  </div>
}

export default GetAdvice;