import {CDN_URL} from "../utils/constants";   //named import

const ResCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,reviewsSummary}=resData ;
    return (
   <div className="w-72 min-w-72 m-3  customheightcards  bg-gray-50 mb-5 rounded-3xl shadow-2xl p-5  hover:bg-gray-100  shadow-slate-300 ">
      <div>

          <div className="w-64 min-w-64" >
            <img
              className="w-60 min-w-60 h-72 min-h-72 rounded-lg "
              alt="res-img"
              src={
                CDN_URL +
                cloudinaryImageId

              }

            />
          </div>
        </div>

        <div className="w-72  min-w-72">
          <p className=" font-semibold mt-4 ">{name}</p>

          <p className="text-slate-600 ">{cuisines.slice(0, 3).join(" ,")}</p>

        </div>

        <div className="flex justify-between text-center items-center mt-3 text-slate-600 mb-3">

          <p className=" px-1 text-white  bg-green-600">⭐{avgRating} </p>
          
          <p className="p-1" >{costForTwo }</p>
        </div>
      </div>
    );
};




export default ResCard;