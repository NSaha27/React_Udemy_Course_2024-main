import { useState } from "react";
import "./Style.css";

function Step(props){
  // setting state here
  const [step, setStep] = useState(1);
  // performing one step down action
  const stepDown = () => {
    if(step > 1) setStep(step - 1);
  };
  // performing one step up action
  const stepUp = () => {
    if(step < 3) setStep(step + 1);
  };

  return <div className="step">
    <div className="step-number">
      <span className={`${step >= 1 ? 'active' : ''}`}>1</span>
      <span className={`${step >= 2 ? 'active' : ''}`}>2</span>
      <span className={`${step >= 3 ? 'active' : ''}`}>3</span>
    </div>
    <div className="step-message">Step {step}: {props.message[(step - 1)]}</div>
    <div className="step-buttons">
      <button className="" onClick={stepDown}>Previous</button>
      <button className="" onClick={stepUp}>Next</button>
    </div>
  </div>
}

export default Step;