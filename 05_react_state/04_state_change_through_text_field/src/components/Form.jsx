import { useState } from "react";

function Form(){
  const [text, setText] = useState("Hello");

  function handleChange(event){
    setText(event.target.value);
  }

  function handleReset(){
    setText("Hello");
  }

  return <div className="form">
    <h2>Change State</h2>
    <div>
      <input type="text" name="txt" id="txt" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  </div>
}

export default Form;