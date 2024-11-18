const projTitle = "React JS Tutorial";

const index = 0;

const element = (
  <div className="container">
    <h1 id="proj-title">{projTitle}</h1>
    <div id="proj-details" tabIndex={index}>
      <p>
        React is a JavaScript library used to build dynamic and interactive User Interfaces.
      </p>
      <p>
        React was developed by Jordan Walke, a facebook engineer, worked in the UI development team of facebook in the year 2011. <br/>
        React was open-sourced in the year 2013.
      </p>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));