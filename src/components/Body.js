import ResCard ,{withLabel }from "./ResCard";
import Shimmer from "./shimmer"; 
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{
    const [LORe,setLORe] =useState([]);
    const [filteredR,setfilteredR]=useState("");

    const [stext,setstext] =useState("");
    const ResCardLabel =withLabel(ResCard);
// console.log(LORe);
    useEffect(()=>{
        fetchData();
        // console.log("use");
    },[]);

    const fetchData =async()=>{
        const data = await fetch(

"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.969541861336673&lng=77.69190827830462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"      ); const json =await data.json();
        
        // console.log(json);
        setLORe(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setLORe(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredR(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // setfilteredR(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    const onlineStatus =useOnlineStatus();

    if(onlineStatus===false)return(
        <h1>Looks like something went wrong!! You are Offline</h1>
    );
    return LORe.length===0? <Shimmer/>:(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4 flex items-center">
                    <input type="text" className="border border-solid border-black" value={stext}
                    onChange={(e)=>{
                      setstext(e.target.value);
                    }}
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={()=>{

                            const filteredR =LORe.filter((res)=>
                            res.info.name.toLowerCase().includes(stext.toLowerCase())
                        );
                        setfilteredR(filteredR);
                        }}
                        >
                            Search
                    </button>
                </div>

                <div className ="px-4 py-2 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg"
                onClick={()=>{
                    const filteredList =LORe.filter((res)=>res.info.avgRating>4.4);


                    setLORe(filteredList);
                }

            }
                
                
                > Top Rated Restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap">
            {filteredR.map((restaurant)=> (<Link key={restaurant.info.id}  to={"/restaurants/"+restaurant.info.id}> {restaurant.info.isOpen?(<ResCardLabel resData ={restaurant}/>):(<ResCard resData={restaurant}/>)}</Link>)) }



            </div>

        </div>
    );
};

export default Body;