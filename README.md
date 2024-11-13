# React_Udemy_Course_2024

All practical examples relating to the React courses from Udemy and The YouTube channel Learn with Sumit will be saved here

(1) What is React?
React is a JavaScript library to create dynamic and interactive User Interfaces.
It is developed by Jordan Walke, a Facebook engineer, who was working in the UI development team of Facebook in the year 2011.

(2) How React works?
There are two packages that are mainly required to create any React project. they are - 
(i) React, (ii) React-DOM.

React is responsible to create HTML contents, and
React-DOM is responsible to update the browser's DOM with the HTML contents created by React package.


(3) Components in React?
i) React applications are entirely made out of components
ii) Components are the building blocks of React applications
iii) Components are the pieces of UI, that has their own data, logic and appearences (how it looks and works)
iv) We build complex UIs by creating multiple components and combining them together
v) Components can be reused, nested inside each other and pass data between them.
vi) Each react component should return a single element

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

What does an declarative approach do :
(i) Describe what an UI should look like based on our current data
(ii) Never touches the DOM (React is an abstraction away from DOM)
(iii) In declarative approach we think of the UI as a reflection of the current data.
