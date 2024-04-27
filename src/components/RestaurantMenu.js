// import {useEffect,useState} from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
// import {MENU_URL } from "../utils/constants";
import ResCategory from "./ResCategory";  
import userResMenu from "../utils/userResMenu";





const RestaurantMenu=()=>{
    const{resId} =useParams();


    const resInfo= userResMenu(resId); // custom hook 

if (resInfo===null) return <Shimmer/>;
const {name,cuisines,costForTwoMessage,avgRatingString,city,costForTwo} =resInfo?.cards[2].card.card.info;

const {itemCards} = (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card );
// const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
 
// console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  
const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> (c).card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
// console.log(categories);

    return (
        <div className="text-center">
            <h1 className ="font-bold my-5 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(",")}-{costForTwoMessage}
            </p>


<h2>menu</h2>
{categories.map((category)=>{  

<ResCategory data={category?.card?.card}/>
})}













 
            {/* <ul> */}

                {/* {itemCards. map( item=> <li key ={item.card.info.id}> {item.card.info.name} -{"Rs."}{item.card.info.price /100}</li>)} */}
                {/* {itemCards. map( item=> <li > {item.card.info.name} </li>)} */}
                {/* /* {itemCards. map( item=> <li key ={item.card.info.id}> {resInfo.cards[2].card.card.info.name} -{"Rs."}{item.card.info.price /100}</li>)} */} 

            {/* </ul>  */}
            </div>
    );
};

export default RestaurantMenu;