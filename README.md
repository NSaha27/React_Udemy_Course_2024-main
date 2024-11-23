# React_Udemy_Course_2024

All practical examples relating to the React courses from Udemy and The YouTube channel Learn with Sumit will be saved here

(1) What is React?
React is a JavaScript library to create dynamic and interactive User Interfaces.
It is developed by Jordan Walke, a Facebook engineer, who was working in the UI development team of Facebook in the year 2011.

(2) How React works?
There are two packages that are mainly required to create any React project. they are - 
(i) React, (ii) ReactDOM.
* The package "React" is responsible to create HTML contents, and
* The package "ReactDOM" is responsible to update the browser's DOM with the HTML contents created by React package.
React JS creates its own virtual DOM seperate from the actual browser DOM and updates the browser DOM according to changes made in the virtual DOM.

(3) What is React Element?
Each React module returns one block of JSX code, that one block of code is called React Element.
React elements are immutable in nature, i.e. their contents never change at runtime.
A React component is created using one or more block of codes (React Elements).

Each React element is converted into a JavaScript object at the end. React tries to understand that object and updates its virtual DOM accordingly.

ex.-

const element = (
  <div className="container">
    <h1 id="title">React Element</h1>
    <div className="details">
      <p>React element is a simple block of JSX code</p>
      <p>It is usually immutable in nature. We cannot change the entire content rather we can change data only.</p>
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));

The above code will be converted into a JavaScript object by React, like this -

{
  type: "div",
  props: {
    className: "container",
    children: [
      {
        type: "h1",
        props: {
          id: "title",
          children: "React Element"
        }
      },
      {
        type: "div",
        props: {
          className: "details",
          children: [
            {
              type: "p",
              props: {
                children: "React element is a simple block of JSX code"
              }
            },
            {
              type: "p",
              props: {
                children: "It is usually immutable in nature. We cannot change the entire content rather we can change data only."
              }
            }
          ]
        }
      }
    ]
  }
}

(3) Components in React?
i) React applications are entirely made out of components
ii) Components are the building blocks of React applications
iii) Components are the pieces of UI, that has their own data, logic and appearences (how it looks and works)
iv) We build complex UIs by creating multiple components and combining them together
v) Components can be reused, nested inside each other and pass data between them.
vi) Each react component should return a single react element

Point: A React Component is actually a function that returns a single React Element. React Element is a block of JSX code (DOM Structure), while React Component is a function which returns that block of code.

(4) What is JSX?
(i) JSX is a declarative syntax that describs what our components look like and how they work.
(ii) Components must return a block of JSX code
(iii) JSX is an extension of javascript that embeds javascript, css and react components into HTML.
(iv) Each JSX code is converted into a React.createElement() function call. The "Babel" package does this job behind the scene.
(v) We could use React without JSX.

JSX works the following way -

JSX code -

<header>
  <h1 style="color: red;">Hello React!</h1>
</header>

The above code will be converted into this -

React.createElement(
"header",
null,
React.createElement(
"h1",
{style: {color: "red"}},
"Hello React!"
)
);

JSX is Declarative

What does an imparative approach do :
(i) Manual DOM element selection and manipulation
(ii) Step-by-step DOM mutation until we reach our targetted UI

What does a declarative approach do :
(i) Describe what an UI should look like based on our current data
(ii) Never touches the DOM (React is an abstraction away from DOM)
(iii) In declarative approach we think of the UI as a reflection of the current data.

(5) What was Seperation of Concern and how React handled it?
In seperation of concern of web design, we create one file for each of the HTML, CSS, and JavaScript code blocks. That was the traditional way of designing a web page.
But to make the design process easier, we took a new design principle called SPA (Single Page Application). In this principle, we co-locate logic and UI at the same place. We do not create different files for HTML, CSS and JavaScript, instead, we create one or more components to build the UI, and each of these components have HTML, CSS, and JavaScript logic coexists (controlled by JavaScript), and this is done by a JavaScript extension called JSX.

