import resList from "../utils/mockData";
import {CDN_URL} from "../utils/constants";

const Rescard=(props)=>{
    const {resData}=props;//Destructuring
   const{
    cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.info
    return(
        <div className="res-container">
        <div className="resCard">
        <img 
        className="image1"
         src={CDN_URL+cloudinaryImageId}
         />
        <h4>{name}</h4>
       <h5>{cuisines.join(", ")}</h5>
       <h5>{avgRating}</h5>
       <h5>{costForTwo}</h5>
       <h5>{deliveryTime} minutes</h5>
       </div>
    </div>
    );
};

export default Rescard;