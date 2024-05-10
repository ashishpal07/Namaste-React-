import { SWIGGY_IMAGE_URL } from "../utils/constants";

const RestaturantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    costForTwo,
    avgRating,
    cuisines,
    sla,
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
      <p>Delivery Time {sla.deliveryTime} Minutes</p>
      <span>
        <p>
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </p>
        <p>{costForTwo}</p>
      </span>
    </div>
  );
};

export default RestaturantCard;