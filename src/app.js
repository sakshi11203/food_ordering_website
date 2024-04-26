// const heading = React.createElement(
//     "h1" ,
//     {id :"heading"},
//     "Hello from react" );
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";

import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// // jsx
// const jsxheading =<h1 id="head"> this is jsx</h1>

// // react component:
// // react functional based component
// const Title =()=>{
// return <h1 className="head">Inside head component</h1>
// };
// const Headin =()=>(
//      <div id ="container">
//     <Title />
//     <h1 className="head"> Inside component</h1>
//     </div>
// );
   





const Applayout =()=>{
    return (
        <div className="app">
 <Header/>
 <Outlet/>
        </div>
       
    )
    
};

const appRouter =createBrowserRouter([

{
  path:"/",
  element :<Applayout/>,
  children:[
    {
      path:"/",
      element:<Body/>,
    },
    {
      path:"/about",
      element :<About/>,
    },
    
    {
      path:"/contact",
      element :<Contact/>,
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu/>, 
    },
  ],

  // errorElement: <Error />
},




]);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);// convertobj into actual tag
