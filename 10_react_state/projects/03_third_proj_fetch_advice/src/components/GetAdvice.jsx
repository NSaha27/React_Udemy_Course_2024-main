import { useState } from "react";
import "./style.css";

function GetAdvice(props){
  const [advice, setAdvice] = useState(props.advices[0]);
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function changeAdvice(){
    if(count < props.advices.length){
      setAdvice(props.advices[count]);
      setCount(count => count + 1);
    }
  }

  return <div className="card">
    {
      isOpen ? 
      <>
        <div>
          <button className="closeBtn" onClick={() => setIsOpen(!isOpen)}>&times;</button>
        </div>
        <div>
          <h1 className="advice">"{advice}"</h1>
          <p className="counter">You're now at advice no. <span>{count}</span></p>
          <button className="submitBtn" onClick={changeAdvice}>Get new advice</button>
        </div>
      </>
      :
      <>
        <div>
          <button className="openBtn" onClick={() => setIsOpen(!isOpen)}>+</button>
        </div>
        <div>
          <h1 className="advice">Click on the above button to the corner to get the advices</h1>
        </div>
      </>
    }
  </div>
}

export default GetAdvice;