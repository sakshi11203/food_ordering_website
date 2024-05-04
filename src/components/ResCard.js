import {CDN_URL} from "../utils/constants";   //named import

const ResCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating}=resData ;
    return (
        // <div className ="h-full">
        // <div className=" overflow-hidden m-4 p-4 w-[250px] rounded-lg shadow-lg bg-gray-100 hover:bg-gray-200 grid-cols-8 " >

        //     <img className="rounded-lg" src={CDN_URL+cloudinaryImageId} />
        //     <h3 className ="font-bold line-clamp-1 h-12  py-4 overflow-hidden text-lg">{name}</h3>
        //     <h4 className="line-clamp-1 h-12 "> {cuisines.join( "," )}</h4>
        //     <h5>{costForTwo}</h5>
        //     <h3>{avgRating}</h3>
        // </div>
        // </div>



        <div className="w-72 m-3 bg-gray-50 mb-10 rounded-3xl shadow-2xl p-6  hover:bg-gray-100  shadow-slate-300 ">
      <div>

          <div className="w-64" >
            <img
              className="w-60 rounded-lg "
              alt="res-img"
              src={
                CDN_URL +
                cloudinaryImageId

              }

            />
          </div>
        </div>

        <div className="w-72 ">
          <p className=" font-semibold mt-4 ">{name}</p>

          <p className="text-slate-600 ">{cuisines.slice(0, 3).join(" ,")}</p>

        </div>

        <div className="flex justify-between text-center items-center mt-3 text-slate-600 mb-3">

          <p className=" px-1 text-white  bg-green-600">⭐{avgRating} </p>
          {/* <p className="p-1">{sla?.deliveryTime}min</p> */}
          <p className="p-1" >{costForTwo }</p>
        </div>
      </div>
    );
};



// higher order compo

// export const withLabel =(ResCard)=>{
//     return(props)=>{
//         return (
//             <div>
//                 <label className="  absolute overflow-ellipsis bg-black text-white m-2 p-2 rounded-lg">IsOpen</label>
//                 <ResCard {...props}/>
//             </div>
//         )
//     }
// }


export default ResCard;