import TemList from "./TemList";
// import {useState} from "react";

const ResCate=({data,showItems,setShowIndex})=>{
    // const {data} =props;
const handleClick=()=>{
    // show={index===1?true:false}
    setShowIndex((prevIndex)=>(prevIndex===showItems?null:showItems));
};

    
    return (
        <div>

      

        {/* <div key={cate?.card?.card?.id} >  */}
          <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-xl p-4">
            <div className ="flex justify-between cursor-pointer" onClick={handleClick}> 
         <span className="font-bold text-lg"> {data.title} ({data.itemCards.length }) </span>
         <span>⬇️</span>
         </div>
{showItems && <TemList  items={data.itemCards}/>}
        </div>
        </div> 
    )
   
}
export default ResCate;