import { useState } from "react";

import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const [input, setInput] = useState("");

  const btnOperations = [
    {
      btnValue: "C",
      onClick: function () {
        setInput("0");
      },
    },
    {
      btnValue: "+/-",
      onClick: function () {
        setInput((prevInputs) =>
          prevInputs[0] === "-" ? "" : "-" + prevInputs
        );
      },
    },
    {
      btnValue: "%",
      onClick: function () {
        setInput((prevInputs) => prevInputs + this.btnValue);
      },
    },
    {
      btnValue: "<xl",
      onClick: function () {
        setInput((prevInputs) => {
          const prevInp = prevInputs;
          prevInp.split().splice(prevInp.length - 1, 1);
          return prevInp;
        });
      },
    },
    {
      btnValue: 7,
      onClick: function () {
        setInput((prevInputs) => prevInputs + this.btnValue);
      },
    },
    {
      btnValue: 8,
      onClick: function () {
        setInput((prevInputs) => prevInputs + this.btnValue);
      },
    },
    {
      btnValue: 9,
      onClick: function () {
        setInput((prevInputs) => prevInputs + this.btnValue);
      },
    },
    {
      btnValue: "/",
      onClick: function () {
        setInput((prevInputs) => prevInputs + this.btnValue);
      },
    },
    {
      btnValue: 4,
      onClick: function () {
        setInput((prevInputs) => prevInputs + this.btnValue);
      },
    },
    {
      btnValue: 5,
      onClick: function () {
        setInput((prevInputs) => prevInputs + this.btnValue);
      },
    },
    {
      btnValue: 6,
      onClick: function () {
        setInput((prevInputs) => prevInputs + this.btnValue);
      },
    },
    {
      btnValue: "x",
      onClick: function () {
        setInput((prevInputs) => prevInputs + this.btnValue);
      },
    },
    {
      btnValue: 1,
      onClick: function () {
        setInput((prevInputs) => prevInputs + this.btnValue);
      },
    },
    {
      btnValue: 2,
      onClick: function () {
        setInput((prevInputs) => prevInputs + this.btnValue);
      },
    },
    {
      btnValue: 3,
      onClick: function () {
        setInput((prevInputs) => prevInputs + this.btnValue);
      },
    },
    {
      btnValue: "-",
      onClick: function () {
        setInput((prevInputs) => prevInputs + this.btnValue);
      },
    },

    {
      btnValue: 0,
      onClick: function () {
        setInput((prevInputs) => prevInputs + this.btnValue);
      },
    },
    {
      btnValue: ".",
      onClick: function () {
        setInput((prevInputs) => prevInputs + this.btnValue);
      },
    },
    {
      btnValue: "=",
      onClick: function () {
        setInput((prevInputs) => prevInputs + this.btnValue);
      },
    },
    {
      btnValue: "+",
      onClick: function () {
        setInput((prevInputs) => prevInputs + this.btnValue);
      },
    },
  ];

  function handleSubmit(ev) {
    ev.preventDefault();
  }

  return (
    <div className="container">
      <div className="calculator">
        <form action="#" method="post" onSubmit={handleSubmit}>
          <Display display={input} />
          <div className="btnContainer">
            {btnOperations.map((oprn, indx) => {
              return (
                <Button
                  btnValue={oprn.btnValue}
                  handleClick={oprn.onClick}
                  key={indx}
                />
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
