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
import { Provider } from "react-redux";
// import Error from "./components/Error";

import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
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
      <Provider store={appStore}>
        <div className="app">
 <Header/>
 <Outlet/>
        </div>
        </Provider>
       
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
    {
      path: "/cart",
      element: <Cart/>, 
    },
  ],

  // errorElement: <Error />
},




]);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);// convertobj into actual tag from element
