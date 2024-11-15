const rootComponent = document.querySelector("#root");

const el = React.createElement("div", null, React.createElement("p", null, "Hello World!"));

ReactDOM.render(el, rootComponent);