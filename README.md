# React_Udemy_Course_2024

All practical examples relating to the React courses from Udemy and The YouTube channel Learn with Sumit will be saved here

1. What is React?
   React is a JavaScript library to create dynamic and interactive User Interfaces.
   It is developed by Jordan Walke, a Facebook engineer, who was working in the UI development team of Facebook in the year 2011.

2. How React works?
   There are two packages that are mainly required to create any React project. they are -
   (i) React, (ii) ReactDOM.

- The package "React" is responsible to create HTML contents, and
- The package "ReactDOM" is responsible to update the browser's DOM with the HTML contents created by React package.
  React JS creates its own virtual DOM seperate from the actual browser DOM and updates the browser DOM according to changes made in the virtual DOM.

3. What is React Element?
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

4. Components in React?
   i) React applications are entirely made out of components
   ii) Components are the building blocks of React applications
   iii) Components are the pieces of UI, that has their own data, logic and appearences (how it looks and works)
   iv) We build complex UIs by creating multiple components and combining them together
   v) Components can be reused, nested inside each other and pass data between them.
   vi) Each react component should return a single react element

Point: A React Component is actually a function that returns a single React Element. React Element is a block of JSX code (DOM Structure), while React Component is a function which returns that block of code.

5. What is JSX?
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

6. What was Seperation of Concern and how React handled it?
   In seperation of concern of web design, we create one file for each of the HTML, CSS, and JavaScript code blocks. That was the traditional way of designing a web page.
   But to make the design process easier, we took a new design principle called SPA (Single Page Application). In this principle, we co-locate logic and UI at the same place. We do not create different files for HTML, CSS and JavaScript, instead, we create one or more components to build the UI, and each of these components have HTML, CSS, and JavaScript logic coexists (controlled by JavaScript), and this is done by a JavaScript extension called JSX.

7. What is React Fragment?
   A React Fragment allows us grouping multiple react elements without creating extra DOM node.

8. Why we use React Fragment?
   i. Returns multiple react elements without a wrapping parent element,
   ii. Clear DOM and consistent styling

9. Write Two syntaxes of React Fragment?
   i. <React.Fragment>...</React.Fragment>
   ii. <>...</>

10. What is the function of JavaScript "map" method in React?
    map method is used to render a list from an array in our JSX code.
    JSX elements - Transform array item into JSX.
    inline rendering - Directly inside JSX code, ex. - {items.map(item => <li key={item.id}>{item.name}</li>)}
    KEY property - Assign unique key into each JSX element for optimized re-rendering
    <div key={item.id}>{item.name}</div>

11. Conditional Rendering?

    1. Displaying content based on certain condition,
    2. Allows for dynamic user interfaces.

12. Methods used in conditional rendering?

    1. if-else statement - choose between two blocks of content.
    2. ternery-operator - Quick way to choose between two options.
    3. Conditional && operator - useful for rendering a content when a condition is true.

13. Benefits of Conditional Rendering?

    1. Enhances user experience,
    2. Reduces unnecessary rendering,
    3. Makes apps more interactive and responsive.

14. What are Props in React?
    props are the mechanism of passing data from one component(mainly parent component) to another component(mainly child component) through attributes.

15. usage of props?
    1. Pass data from parent to child component,
    2. Making a component reusable,
    3. Defined as attributes in JSX.
16. Key-points relating to Props?

    1. They are immutable, we cannot change the value of a prop, we can only use them,
    2. They flow downwards, i.e. from parent to its child component(s),
    3. Used for communication between components.

17. Handling Events?

    1. React events use camelCase e.g. onClick,
    2. Uses synthetic events, not direct browser events,
    3. Event handlers can be normal functions or arrow functions,
    4. Use onChange for controlled form inputs,
    5. Avoid inline arrow functions in JSX for better performance and cleaner code.

18. Passing functions via props?

    1. Pass dynamic behavior between components,
    2. Enables upward communication from child to parent component,
    3. Commonly used for event handling,
    4. Parent defines a function, and child invokes it,
    5. Enhances component interactivity,
    6. ex.
       <Button onClick={handleClick}>

19. How to manage States?

    1. State represents data that change over time,
    2. State is local and private to the component,
    3. State changes cause the component to re-render,
    4. For functional components, use the useState hook,
    5. React functions that start with the keyword "use" are called hooks,
    6. Hooks should only be used inside components,
    7. Parent components pass hooks to child components via props,
    8. Lifting state up: share states between components by moving it to their closest common ancestors.

20. Example of React State?
    const [formData, setFormData] = useState({username: "", phone: "", email: "", password: ""});

    Note -
    useState hook takes an initial value as parameter, and returns an array of exactly two values, one is the current value of the state, and another is the updator function that updates the current value.

21. How to add and import React-Icons in your project?
      step 1. Install react-icons package - "npm install react-icons --save"
      step 2. import any icon in your .jsx file - 'import {IconName} from "react-icons/ri"'
      step 3. Use the icon as a react element - "<IconName />".

22. React Developer Tools -
    Advantages -
      1. Inspection - Allows inspection of React component hierarchies.
      2. State & Props - View and edit current state and props(view only) of a component.
      3. Performance - Analize component re-renders and performance bottlenecks.
      4. Navigation - Conveniently navigate through the entire component tree.
      5. Filtering - Filter components by their name and source to locate them quickly.
      6. Real-time feedback - See live changes as we modify state and props. 

23. How React works?
    1. Root Component - 

24. useReducer Hook, what to remember?
    - To convert from useState to useReducer:
        1. Dispatch actions from event handlers.
        2. Write a reducer function that returns the next state for a given state and action.
        3. Replace useState with useReducer.
    - Reducers require you to write a bit more code, but they help with debugging and testing.
    - Reducers must be pure.
    - Each action describes a single user interaction.
    - Use Immer if you want to write reducers in a mutating style.