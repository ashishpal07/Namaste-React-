import RestaturantCard from "./RestaurantCard";
import resList from "../utils/data";
import { useState } from "react";

const Body = () => {

  const [restaurentList, setRestaurentList] = useState(resList);  

  const filterRestaurentHanler = () => {
    console.log("here");
    const resList = restaurentList.filter(
      (res) => res.data.avgRating > 4
    );
    restaurantList = setRestaurentList(resList);
  };

  return (
    <div className="body">
      <div className="search">
        <button className="search-btn" onClick={filterRestaurentHanler}> Filter Reaturents </button>
      </div>
      <div className="restaurant-container">
        {restaurentList.map((restaurant) => {
          return (
            <RestaturantCard
              key={restaurant.data.uuid}
              restaurantData={restaurant.data}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
