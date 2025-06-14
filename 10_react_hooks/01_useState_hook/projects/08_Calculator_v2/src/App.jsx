import { useState } from "react";

import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const [input, setInput] = useState("");

  const btnOperations = ["C", "+/-", "%", "Del", "7", "8", "9", "/", "4", "5", "6", "x", "1", "2", "3", "-", "0", ".", "=", "+"];

  function onBtnClick(ev){
    const btnValue = ev.target.childNodes[0].data;
    if(btnValue === "C"){
      setInput("");
    }else if(btnValue === "Del"){
      setInput((prevInputs) => {
        const prevInp = prevInputs.split("");
        prevInp.pop();
        return prevInp.join("");
      });
    }else if(btnValue === "+/-"){
      setInput((prevInputs) => {
        let newInput = "";
        if(prevInputs[0] === "-"){
          newInput = prevInputs.replace("-", "");
        }else{
          newInput = "-" + prevInputs;
        }
        return newInput;
      });
    }else if(btnValue === "x"){
      const newInput = input + "*";
      setInput(newInput);
    }else if(btnValue === "="){
      setInput((prevInputs) => eval(prevInputs));
    }else {
      const newInput = input + btnValue;
      setInput(newInput);
    }
  }

  return (
    <div className="container">
      <div className="calculator">
          <Display display={input} />
          <div className="btnContainer">
            {btnOperations.map((oprn, indx) => {
              return (
                <Button
                  btnValue={oprn}
                  handleClick={(ev) => onBtnClick(ev)}
                  key={indx}
                />
              );
            })}
          </div>
      </div>
    </div>
  );
}

export default App;
