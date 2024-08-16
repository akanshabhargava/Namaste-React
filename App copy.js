// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From React!"
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/* Nested elements
  <div id='parent'>
    <div id='child'>
    <h1>I'm a h1 tag</h1>
    </div>
 </div>
*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am a h1 tag")
//   )
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

/** Siblingd
 * <div id='parent'>
    <div id='child'>
    <h1>I'm a h1 tag</h1>
    <h2>I'm a h2 tag</h2>
    </div>
 </div>
 */
//  const parent = React.createElement(
//    "div",
//    { id: "parent" },
//    React.createElement("div", { id: "child" }, [
//      React.createElement("h1", {}, "I am a h1 tag"),
//      React.createElement("h2", {}, "I am a h2 tag"),
//    ])
//  );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
/***
  * 
/** Siblingd
 <div id='parent'>
    <div id='child'>
    <h1>I'm a h1 tag</h1>
    <h2>I'm a h2 tag</h2>
    </div>
    <div id='child2'>
    <h1>I'm a h1 tag</h1>
    <h2>I'm a h2 tag</h2>
    </div>
 </div>  **/
import React from "react";
import ReactDOM from "react-dom/client";
//  const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [React.createElement("div", { id: "child" }, [
//       React.createElement("h1", {}, "This is a namaste react 🧨"),
//       React.createElement("h2", {}, "I am a h2 tag"),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "I am a h1 tag "),
//         React.createElement("h2", {}, "I am a h2 tag"),
//       ]),]
//   );
//  console.log(parent);
//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(parent);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🧨"
);
console.log(heading);
const pTag = document.createElement("p");

console.log(pTag);
//JSX-HTML like or XML like syntax
const jsxHeading = <h1>Namste JAvascript using JSX 🧨</h1>; //jsxheaing is a react lemetn which is a javascript object
// Functioanl Component
/*const Heading = () => {
  return <h1>Namste React Heading</h1>;
};*/

//const Heading1 = () => <h1>Namsrte REact</h1>;
const Title = () => <h1>Namaste React USing JSX 🧨</h1>;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namste REact Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
console.log(HeadingComponent);
console.log(<HeadingComponent />);
root.render(<HeadingComponent />);
