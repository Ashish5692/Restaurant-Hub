import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")); //for displaying on browser

root.render(<AppLayout />);




// // Core React - React.createElement =>JS Object => HTMLElement(render)
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// //JSX - JSX is not HTML ..it is HTML or XML like syntax
// //JSX => React.createElement => React Element- JS object => HTML Element(render)
// //Babel convert/transpile JSX to core React code.
// const jsxHeading = <h1 className="head">Namaste React using JSX</h1>;

// //React Functional Component- fn that return JSX code

// const Title = () => <h1>I am Title</h1>;

// const HeadingComponent2 = () => {
//   return <h1>Namaste Functional component</h1>;
// };
// //Another Syntax
// const HeadingComponent = () => (
//   <div id="container">
//     {Title()}
//     <Title></Title>
//     <Title />
//     <h1>Namaste Functional component</h1>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root")); //for displaying on browser

// root.render(<HeadingComponent />);
