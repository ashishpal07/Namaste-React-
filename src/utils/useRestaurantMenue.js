import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_API } from "./constants";

const useRestaurantMenue = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_API + resId);
    const resData = await data.json();
    setResInfo(resData);
  };

  return resInfo;
};

export default useRestaurantMenue;
