import { SWIGGY_IMAGE_URL } from "../utils/constants";

const RestaturantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    costForTwo,
    avgRating,
    cuisines,
    deliveryTime,
  } = props.restaurantData;

  return (
    <div className="restaurent-card">
      <img
        className="restaurent-image"
        src={SWIGGY_IMAGE_URL + cloudinaryImageId}
        alt="restaurent-image"
      />
      <h4>{name}</h4>
      <p>{cuisines.join(", ")}</p>
      <p>Delivery Time {deliveryTime}</p>
      <span>
        <p>
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </p>
        <p>Cost For Two {costForTwo / 100}</p>
      </span>
    </div>
  );
};

export default RestaturantCard;