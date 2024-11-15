const rootComponent = document.querySelector("#root");

function getElement(){
  const [counter, setCounter] = React.useState(0);

  return (
    <div className="set-counter">
      <span classname="counter">{counter}</span>
      <button className="btn" onClick={() => setCounter(counter + 1)}>Increase +</button>
    </div>
  );
}

ReactDOM.render(<getElement />, rootComponent);