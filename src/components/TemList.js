// import { useDispatch } from "react-redux";
// import { CDN_URL } from "../utils/constants";
// import { addItems } from "../utils/cartSlice";

// const TemList =({items})=>{
// const dispatch = useDispatch();
//     const handleAddItem=(item)=>{
//         // dispatch an action
//         dispatch(addItems(item));
//     }
//     return (
//         <div>

    
//     {items.map(item=> <div key ={item.card.info.id}  className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
    
//        {/* <img src={CDN_URL + item.card.info.imageId}/> */}
//        <div className ="w-9/12">
//         <div className="py-2">

//             <span>{item.card.info.name}</span>
//             <span>-₹{item.card.info.price ? item.card.info.price/100 :item.card.info.defaultPrice/100}</span>
//         </div>

//         <p className="text-xs">{item.card.info.description}</p>
//         </div>
//         <div className ="w-3/12 p-4">

// <div className ="absolute">
//     <button className="p-2 mx-5 bg-white shadow-lg m-auto   "  onClick ={()=>handleAddItem(item)}>Add +</button>
// </div>

//         <img src={CDN_URL + item.card.info.imageId} />
//         </div>
//     </div>
//     )
//     }

//         </div>
//     )
// }
// export default TemList;




import React from 'react'
import { CDN_URL} from "../utils/constants";



const TemList = ({ fooditem }) => {

    return (
        <div>
            <div>

                <div className='w-72 m-6  lg:w-72 md:w-60 sm:w-60 min-[320px]:w-54 lg:m-5 md:m-4 sm:m-3 min-[320px]:m-2 border-black  hover:shadow-2xl flex-wrap  rounded-xl
                 bg-gray-200  h-auto text-black p-4 '>

{/* cart component using these type of  cart (fooditem) */}
                    <p className='font-medium text-lg p-2'>{fooditem?.card?.info?.category}</p>
                    <img className='rounded-2xl w-auto' src={CDN_URL + fooditem?.card?.info?.imageId}></img>
<br></br>
                    <h3 className='font-semibold  w-60  text-lg'>{fooditem?.card?.info?.name}</h3>



                    <p className='text-base font-normal'>

                        Price : {(fooditem?.card?.info?.price / 100) || (fooditem?.card?.info?.defaultPrice / 100)} Rs

                    </p>
                </div>
            </div>
        </div>
    )
}

export default TemList;








