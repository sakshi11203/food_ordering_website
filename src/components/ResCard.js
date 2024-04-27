import {CDN_URL} from "../utils/constants";   //named import

const ResCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating}=resData?.info ;
    return (
        <div className=" m-4 p-4 w-[250px] rounded-lg shadow-lg bg-gray-100 hover:bg-gray-200 grid-cols-8 " >

            <img className="rounded-lg" src={CDN_URL+cloudinaryImageId} />
            <h3 className ="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join( "," )}</h4>
            <h5>{costForTwo}</h5>
            <h3>{avgRating}</h3>
        </div>

    );
};

// higher order compo

export const withLabel =(ResCard)=>{
    return(props)=>{
        return (
            <div>
                <label className="  absolute overflow-ellipsis bg-black text-white m-2 p-2 rounded-lg">IsOpen</label>
                <ResCard {...props}/>
            </div>
        )
    }
}


export default ResCard;