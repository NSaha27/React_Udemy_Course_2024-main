import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';

const index = 0;
setInterval(
  function(){
    const timerElement = (
      <div className="timer">
        <h1 tabIndex={index}>Timer : {new Date().toLocaleTimeString()}</h1>
        <div className="para">
          {/* <img src="" alt="Image" /> */}
          <p>We can't change this express element, because react element is immutable.</p>
        </div>
      </div>
    );
    ReactDOM.render(timerElement, document.getElementById("root"));
  }, 1000);


reportWebVitals();
