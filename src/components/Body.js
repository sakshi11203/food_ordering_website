import ResCard from "./ResCard";
import Shimmer from "./shimmer"; 
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{
    const [LORe,setLORe] =useState([]);
    const [filteredR,setfilteredR]=useState("");

    const [stext,setstext] =useState("");

    useEffect(()=>{
        fetchData();
        // console.log("use");
    },[]);

    const fetchData =async()=>{
        const data = await fetch(

"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.969541861336673&lng=77.69190827830462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"      ); const json =await data.json();
        
        console.log(json);
        setLORe(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredR(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    const onlineStatus =useOnlineStatus();

    if(onlineStatus===false)return(
        <h1>Looks like something went wrong!! You are Offline</h1>
    );
    return LORe.length===0? <Shimmer/>:(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={stext}
                    onChange={(e)=>{
                      setstext(e.target.value);
                    }}
                    />
                    <button
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
                <button className="filter-btn"
                onClick={()=>{
                    const filteredList =LORe.filter((res)=>res.info.avgRating>4.4);


                    setLORe(filteredList);
                }

            }
                
                
                > Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {filteredR.map((restaurant)=> (<Link key={restaurant.info.id}  to={"/restaurants/"+restaurant.info.id}><ResCard resData={restaurant}/></Link>)) }



            </div>

        </div>
    );
};

export default Body;