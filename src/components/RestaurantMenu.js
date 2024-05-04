// // import {useEffect,useState} from "react";
// import Shimmer from "./shimmer";
// import { useParams } from "react-router-dom";
// // import {MENU_URL } from "../utils/constants"
// import { useState } from 'react';
// import userResMenu from "../utils/userResMenu";
// import Menu from "./Menu";



// import ResCate from "./ResCate";
// // import TemList from "./TemList";
// // const [isActive, setIsActive] = useState(false);  //added

// // const [showItems,setshowItems]= useState(false);
// const RestaurantMenu=()=>{
//     // const [show,setshow]= useState(false);
//     const{resId} =useParams();


//     const resInfo= userResMenu(resId); // custom hook 
//     const [showIndex,setShowIndex] =useState(null);

// if (resInfo===null) return <Shimmer/>;
// const {name,cuisines,costForTwoMessage,avgRatingString,city,costForTwo} =resInfo?.cards[2].card.card.info;

// const {itemCards} = (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card );
// // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
 
// // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  
// const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
// // console.log(categories); 



//     return (
//         <div className="text-center">
//             <h1 className ="font-bold my-5 text-2xl">{name}</h1>
//             <p className="font-bold text-lg">
//                 {cuisines.join(",")}-{costForTwoMessage}
//             </p>
         


// {/* {categories.map((cate)=>{
//         return (
//             <div key={cate?.card?.card?.id} > 
//               <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-xl p-4">
//                 <div className ="flex justify-between cursor-pointer" > 
//              <span className="font-bold text-lg"> {cate?.card?.card?.title} ({cate?.card?.card?.itemCards.length }) </span>
//              <span>⬇️</span>
//              </div>
// {showItems && <TemList  items={cate?.card?.card?.itemCards}/>}
//             </div>
//             </div> 
//         )
       
// })} */}

// {categories.map((category,index)=>(<ResCate key={category?.card.card.title} data={category?.card?.card}

// showItems={ index===showIndex}

// setShowIndex={()=>setShowIndex(index===showIndex?null:index)}

// />))}



 
//             </div>
//     );
// };

// export default RestaurantMenu;

// import Shimmer from "./shimmer";
// import { useParams } from "react-router-dom";
// // import {MENU_URL } from "../utils/constants"
// import { useState } from 'react';
// import userResMenu from "../utils/userResMenu";
// import Menu from "./Menu";



// import ResCate from "./ResCate";

import React from "react";
import Simmermenucards from "./Simmermenucards";
import { useParams } from "react-router-dom";
import userResMenu from "../utils/userResMenu";
import Menu from "./Menu";

const RestaurantMenu = () => {


    const { resId } = useParams();


    const resinfo = userResMenu(resId);

    // const ItemCards = resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

// filter item category
    const categories =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log(categories);

    if (resinfo == null) {
        return < Simmermenucards/>;
    }

// restaurent menu 
    const { name, cuisines, areaName
        , avgRatingString, totalRatingsString, city, locality, }

        = resinfo?.cards[2]?.card?.card?.info;



        // resInfo?.cards[2].card.card.info;

    const Info = resinfo?.cards[2]?.card?.card?.info;



    return (
        // menu top section 
        <div className=" mt-4  w-3/4 mx-auto min-[320px]:w-auto"  >
            <div className=" text-xs mt-8 w-3/4  m-auto lg:px-10  sm:px-8 min-[300px]:px-0" >
                <p>Home / {city} / {locality} / {name}</p>
            </div>

            <div className=" flex  justify-around   items-center py-5 text-center  min-[320px]:gap-2">

                <div className=" px-2  min-[350px]:px-1   ">
                    <h3 className="  font-sans  text-2xl font-medium min-[320px]:text-xl"> {name}</h3>

                    <h3 className=" font-sans "  >{cuisines.join(" ,")}</h3>

                    <h3 className="  font-sans "> {areaName} ,  {Math.round(Info?.sla.lastMileTravel) / 1000} km</h3>
                </div>


                <div className=" border-2 rounded-md p-3 xl:p-3 md:p-2 sm:p-1 min-[310px]:p-1 bg-green-200">
                    <h3 className="text-red-700"> {avgRatingString} ⭐ </h3>

                    <hr></hr>
                    <h3>{totalRatingsString}</h3>
                </div>
            </div>
            <hr className="w-2/3 m-auto h-2"></hr>


            <div className="  w-3/4 mx-auto  my-5">

                <h1 className="text-xl font-semibold sm:font-semibold min-[320px]:font-medium text-green-400">Menu</h1>
            </div>
            <div >

            {/*  all items of categories */}
                {
                    categories.map((menuitem, index) => {

                      
                        key = { index }
                        return (
                            <>
                          

                                <Menu menu={menuitem} ></Menu>



                            </>
                        )
                    })

                }

            </div>

           
        </div>
    );
};

export default RestaurantMenu; 