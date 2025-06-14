import { useState } from "react";
import Score from './Score';
import Status from "./Status";

function Game(props){
  const randNumber = props.randNumber;
  const [formData, setFormData] = useState({myGuess: "",});
  const [count, setCount] = useState(1);
  
  function handleChange(event){
    const {name, value} = event.target;
    setFormData(prevGuess => ({...prevGuess, [name]: value}));
  }

  function handleSubmit(event){
    event.preventDefault();
    if(count < 5) setCount(count + 1);
    console.log(randNumber);
  }

  function handleReset(event){
    // code...
    return true;
  }

  return <div className="container">
    <Score highestScore={12} currentScore={5} />
    <Status status={formData.myGuess == randNumber ? "matched" : "unmatched"} />
    <div className="form-section">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="number" name="myGuess" id="myGuess" value={formData.myGuess} className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">Check</button>
          <button className="btn btn-danger" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  </div>
}

export default Game;