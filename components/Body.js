import { useState } from "react";
import resList from "../utils/mockData";
import Rescard from "./Rescard";





const Body= () =>{

  let [listOfRestaurants, setListOfRestaurant]=useState(resList);


    return(
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
          onClick={ () => {
            const filteredList=listOfRestaurants.filter((res) => res.info.avgRating >4.5);
            setListOfRestaurant(filteredList);
          }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="cards">
          {listOfRestaurants.map((restaurant) =>(
          <Rescard key={restaurant.info.id} resData={restaurant}/>
          ))} 
        </div>
    </div>
    )
};

export default Body;