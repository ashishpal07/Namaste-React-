import { useParams } from "react-router-dom";
import useRestaurantMenue from "../utils/useRestaurantMenue";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenue(resId);

  /**
   * Try to build a feature if you click any restaurant-category that should be open and other should
   * get closed if again click on the same then that should get close. [Use uplift state concept].
   * 
   * Very important concept how to avoid [props drilling] using createContext() hook, useContext()
   */

  const restaurentDetails = resInfo?.data?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) => {
        return (
          cat.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="text-center">
      <p className="text-xl font-semibold my-3">{restaurentDetails.name}</p>
      <p className="text-lg font-semibold">
        {restaurentDetails.cuisines.join(", ")} -
        {restaurentDetails.costForTwoMessage}
      </p>

      <div>
        {categories.map((cat) => {
          return (<RestaurantCategory key={cat?.card?.card?.title} data={cat?.card?.card} />);
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
