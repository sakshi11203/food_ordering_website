import React from "react";
import ResCard from "./ResCard"; 
import { useState, useEffect } from "react";
import Simmeruicards from "./Simmeruicards";
import { Link } from "react-router-dom";
// import { ListofRestaurent } from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus";
import Networkconnection from "../utils/Networkconnection";
import Hero from "./Hero";


const Body = () => {
  const [LORe, setLORe] = useState([]);
//   const [filteredR, setfilteredR] = useState([]);
//   const [Searchlistofres, SetSearchlistofres] = useState("");
  const [searchResult, setSearchResult] = useState(true);



//   const [LORe,setLORe] =useState([]);
      const [filteredR,setfilteredR]=useState("");
  
      const [stext,setstext] =useState("");    //Searchlistofres,
    //   const ResCardLabel =withLabel(ResCard);



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.969541861336673&lng=77.69190827830462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
    // swiggy api fetch

    const json = await data.json();
    // console.log(json);

    console.log(json);



//  data  come from api  new swiggy api 

    setLORe(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setfilteredR(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };

  
  const OnlineStatus = useOnlineStatus(true);

  if (!OnlineStatus) {
    return <h1><Networkconnection/></h1>;
  }


  if (LORe?.length == 0) {
 return <Simmeruicards />
  }




  return (
    <>
    {/* <Hero/> */}
      <div className="  shadow-2xl mb-10  m-auto rounded-2xl">

        <br></br>
{/*  tailwind css for body component with responsiveness */}
        <div className="  flex justify-between  items-center  rounded-2xl mx-5 m-auto   
         xl:gap-0 xl:px-10 lg:gap-2 lg:px-10 lg:py-5 md:justify-center md:flex-wrap md:gap-2 sm:py-2 md:p-1   sm:flex-wrap sm:justify-center
           min-[300px]:flex-wrap min-[300px]:justify-center  min-[300px]:py-2 min-[300px]:gap-4
       shadow-lg text-center gap-5 bg-gray-50">
          <div className="font-bold text-xl text-orange-600   lg:font-bold lg:text-base  ">
            <h2>
              <span className="text-green-500 lg:px-2">Welcome to</span> food point
            </h2>
          </div>

{/* input section */}
          <div className=" flex  gap-5 mx-10 min-[300px]:justify-center  min-[300px]:flex-wrap ">
            <input
              type="search"
              className="bg-gray-100 outline-none p-1 px-16 rounded-md text-green-700 min-[300px]:w-60  "
              placeholder="Search items..."
              value={stext}
              onChange={(e) => {
                setstext(e.target.value);
              }}
            ></input>










{/*  search button */}
            <button
              data-testid="search-btn"
              className=" bg-green-500  rounded-md p-2 text-white xl:p-2 xl:px-4   lg:p-0 lg:px-3  min-[320px]:px-4 min-[320px]:p-1"
              onClick={() => {
                const filteredR =LORe.filter((res)=>
                //iteration
                  res?.info?.name
                    .toLowerCase()
                    .trim()
                    .includes(stext.toLowerCase().trim())
                );
                if (filteredR.length) {
                  setSearchResult(true);
                } else setSearchResult(false);

                setfilteredR(filteredR);
              }}
            >
              Search food
            </button>
          </div>
 {/* rating button */}
          <div className="flex mx-5 gap-10  ">
            <button
              className=" p-2  bg-green-500  rounded-md text-white xl:p-2 xl:px-4  lg:p-1 lg:px-2 min-[320px]:p-1 "
              onClick={() => {
                const listss = LORe.filter((res) => res.info.avgRating < 3);

                setfilteredR(listss);
              }}
            >
              3 ⭐ Rating
            </button>


            <button
              className=" p-2  bg-green-500  rounded-md text-white xl:p-0 xl:px-4 lg:p-1 lg:px-2   min-[320px]:p-1   "
              onClick={() => {
                const lists = LORe.filter((res) => res.info.avgRating > 4.0);

                setfilteredR(lists);
              }}
            >
              4 ⭐ Rating
            </button>
          </div>
        </div>


{/* restaurent data   comes from api and looping in restaurent card using map function  */}

        <div className="flex flex-wrap m-2 justify-center " data-testid="reslist">
          {searchResult ? (
            filteredR?.map((res) => {
              return (
                <Link to={"/restaurants/" + res?.info.id} key={res?.info.id}>
                  <ResCard resData={res?.info} />
                </Link>
              );
            })
          ) : (

            
            <div className="h-screen pt-52 flex justify-center">
              <p className="text-7xl font-semibold ">Sorry search not found 🥺🥺🥺</p>
              {/* <img
                className="w-[70%] mt-32 mb-28 "   
                src='https://image.similarpng'
              /> */}
              {/* this is the function for  no search  found */}
            </div>
          )}
           </div>
      </div>

    </>
  )
};

export default Body;