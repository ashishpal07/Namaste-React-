import RestaturantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";

const Body = () => {
  const [restaurentList, setRestaurentList] = useState([]);
  const [filterRestarent, setFilterRestaurent] = useState([]);
  const [seatchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    setRestaurentList(
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurent(
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurentList.length === 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={seatchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filterList = restaurentList.filter((res) =>
              res.info?.name?.toLowerCase().includes(seatchText.toLowerCase())
            );
            setFilterRestaurent(filterList);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-container">
        {filterRestarent.map((restaurant) => {
          return (
            <RestaturantCard
              key={restaurant.info?.id}
              restaurantData={restaurant.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
