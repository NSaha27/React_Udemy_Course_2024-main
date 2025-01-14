import { useState } from "react";

function DateCounter(){
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date(Date.now());

  function decreaseStep(){
    if(step > 1) setStep(stp => stp - 1);
  }
  function increaseStep(){
    setStep(stp => stp + 1);
  }

  function decreaseCount(){
    setCount(cnt => cnt - step);
  }

  function increaseCount(){
    setCount(cnt => cnt + step);
  }

  date.setDate(date.getDate() + count);

  return <div className="dateCounter">
    <div className="step">
      <button className="decreaseBtn" onClick={decreaseStep}>-</button>
      <span className="dispStep">Step: {step}</span>
      <button className="increaseBtn" onClick={increaseStep}>+</button>
    </div>
    <div className="count">
      <button className="decreaseBtn" onClick={decreaseCount}>-</button>
      <span className="dispCount">Count: {count}</span>
      <button className="increaseBtn" onClick={increaseCount}>+</button>
    </div>
    <div className="message">
      <span className="message">{
        count === 0 ?
          `Today is `
        :
          count < 0 ? `${Math.abs(count)} days ago was ` : `${count} days from today will be `  
      }</span>
      <span className="message">{date.toDateString()}</span>
    </div>
  </div>
}

export default DateCounter;