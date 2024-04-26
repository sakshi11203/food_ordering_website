import {CDN_URL} from "../utils/constants";   //named import

const ResCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating}=resData?.info ;
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join( "," )}</h4>
            <h5>{costForTwo}</h5>
            <h3>{avgRating}</h3>
        </div>

    )
}


export default ResCard;