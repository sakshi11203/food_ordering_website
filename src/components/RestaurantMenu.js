// import {useEffect,useState} from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
// import {MENU_URL } from "../utils/constants";

import userResMenu from "../utils/userResMenu";





const RestaurantMenu=()=>{
    const{resId} =useParams();


    const resInfo= userResMenu(resId); // custom hook

//     const [resInfo,setresInfo] =useState(null);

 
//     useEffect( ()=>{
// fetchMenu();
//     },[]);
// const fetchMenu = async()=>{
//     const data =await fetch(
// MENU_URL+resId
//     );

//     const json =await data.json();
   
//     setresInfo(json.data);
// }; 
if (resInfo===null) return <Shimmer/>;
const {name,cuisines,costForTwoMessage,avgRatingString,city,costForTwo} =resInfo?.cards[2].card.card.info;


const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1> 
            <h3>{cuisines.join(",")}</h3>
            <h4>{costForTwoMessage || costForTwo}</h4>
            <h4>{avgRatingString}</h4>
            <h3>{city}</h3>

            <h2>Menu</h2>
            <ul>

                {itemCards.map(item=> <li key ={item.card.info.id}> {item.card.info.name} -{"Rs."}{item.card.info.price /100}</li>)}
             

            </ul>
            </div>
    );
};

export default RestaurantMenu;