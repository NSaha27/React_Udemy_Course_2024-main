import React from "react";

function Greet(props){
  return (
    <div id="greet">
      <h1 className="title">{props.greet}</h1>
      <p>
        <small>
          <strong>It is {new Date().toLocaleTimeString(props.locale)} now</strong>
        </small>
      </p>
    </div>
  )
}

export default Greet;