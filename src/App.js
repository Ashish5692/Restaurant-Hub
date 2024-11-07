import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; //create routing configuration
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const AppLayout = () => {

  const[userName, setUserName] = useState();

  //authentication
  useEffect(()=>{
    //make an API call and send username and password
    const data = {
      name: "Ashish Yadav",
    };
    setUserName(data.name);
  },[]);

  return (
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

//creating routing configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId", //routes will be unique everytime we have new restaurant
        element: <RestaurantMenu />
      },
    ],
    errorElement: <Error />
  },
  
  
]);

const root = ReactDOM.createRoot(document.getElementById("root")); //for displaying on browser

//Providing router configuration
root.render(<RouterProvider router={appRouter}/>);




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
