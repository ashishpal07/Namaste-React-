import { SWIGGY_IMAGE_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";

const RestaturantCard = (props) => {
  const { name, cloudinaryImageId, costForTwo, avgRating, cuisines, sla } =
    props.restaurantData;

  return (
    <div className="p-2 m-4 w-[230px] rounded-lg hover:bg-slate-200 hover:shadow-lg">
      <img
        className="rounded-tr-md rounded-tl-lg h-[150px] w-[230px]"
        src={SWIGGY_IMAGE_URL + cloudinaryImageId}
        alt="restaurent-image"
      />
      <h4 className="font-bold text-md">
        {name.length > 18 ? <p>{name.substring(0, 19)}...</p> : <p>{name}</p>}
      </h4>
      <p className="text-sm">
        {cuisines.join(", ").length > 19 ? (
          <p>
            {cuisines.join(", ").substring(0, 20)}...
            <span className="text-blue-400">see more</span>
          </p>
        ) : (
          <p>{cuisines.join(", ")}</p>
        )}
      </p>
      <p className="text-sm">Delivery Time {sla.deliveryTime} Minutes</p>
      <span className="flex justify-between items-center">
        <p className="text-sm">{costForTwo}</p>
        <p className="flex justify-center items-center">
          <FaStar className="text-green-500 text-sm" />
          <span className="text-sm ml-1">{avgRating}</span>
        </p>
      </span>
    </div>
  );
};

export const RestaurantCartWithPromoted = (RestaturantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaturantCard {...props} />
      </div>
    );
  }
}

export default RestaturantCard;
