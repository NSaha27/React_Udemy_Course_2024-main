const rootElement = document.getElementById("root");

function createReactElement(reactEl, rootEl){
  const domElement = document.createElement(reactEl.type);
  domElement.innerHTML = reactEl.children;
  for(let attr in reactEl.props){
    domElement.setAttribute(attr, reactEl.props[attr]);
  }
  rootEl.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank"
  },
  children: "click here to visit google"
};

createReactElement(reactElement, rootElement);