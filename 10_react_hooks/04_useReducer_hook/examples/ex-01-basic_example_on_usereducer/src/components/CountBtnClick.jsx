import { useReducer } from "react";

function countReducer(state, action){
  const result = {};
  switch(action.type){
    case "INCREASE_COUNTER":
      result.count = state.count + 1;
      break;
    default:
      throw new Error("unknown action!");
  }
  return result;
}

function CountBtnClick(){
  const [state, dispatchCount] = useReducer(countReducer, {count: 1});

  function handleCountClicks(){
    const increaseCounterAction = {
      type: "INCREASE_COUNTER",
    };
    dispatchCount(increaseCounterAction);
  }

  return <div className="calc-age">
    <button className="" onClick={handleCountClicks}>Increment count</button>
    <p className="">Button has been clicked for {state.count} times.</p>
  </div>
}

export default CountBtnClick;