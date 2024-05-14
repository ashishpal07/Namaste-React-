import RestaturantCard, {
  RestaurantCartWithPromoted,
  RestaurantCartWithPromoted,
} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

import { Link } from "react-router-dom";
// import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurentList, setRestaurentList] = useState([]);
  const [filterRestaurent, setFilterRestaurent] = useState([]);
  const [seatchText, setSearchText] = useState("");

  const PromotedRestaurant = RestaurantCartWithPromoted(<RestaturantCard />);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    console.log("message", jsonData);
    setRestaurentList(
      jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestaurent(
      jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (!onlineStatus) {
    return (
      <div className="flex justify-center items-center font-bold h-[70vh]">Looking like you are offline. Please check your connection!</div>
    );
  }

  console.log(restaurentList);
  // debugger
  return restaurentList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="p-3 m-2">
        <input
          type="text"
          className="mx-2 p-1 border-2 border-black rounded-lg"
          value={seatchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="mx-2 p-1 border-2 border-black rounded-lg bg-black text-white"
          onClick={() => {
            const filterList = restaurentList.filter((res) =>
              res.info?.name?.toLowerCase().includes(seatchText.toLowerCase())
            );
            setFilterRestaurent(filterList);
          }}
        >
          SEARCH
        </button>

        <button
          className="mx-2 p-1 border-2 border-amber-700 rounded-lg bg-amber-700 text-white"
          onClick={() => {
            const filter = filterRestaurent.filter((res) => {
              res.data.avgRating > 4;
            });
            setFilterRestaurent(filter);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filterRestaurent.map((restaurant) => {
          return (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant.info?.id}
            >
              {restaurant.data?.promoted ? (
                <PromotedRestaurant restaurantData={restaurant.info} />
              ) : (
                <RestaturantCard restaurantData={restaurant.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
