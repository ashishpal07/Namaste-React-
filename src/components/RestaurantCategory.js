import { FaChevronUp } from "react-icons/fa";
import ListItem from "./ListItem";
import { useState } from "react";

const RestaurantCategory = (props) => {
  const { data } = props;
  const [showItems, setShowItems] = useState(false);

  const showItemHandler = () => {
    showItems ? setShowItems(false) : setShowItems(true);
  };

  return (
    <div>
      <div className="w-7/12 mx-auto mt-5 shadow-lg cursor-pointer">
        <div
          className="flex justify-between items-center p-2 rounded-md bg-slate-100"
          onClick={showItemHandler}
        >
          <span className="font-semibold">
            {data.title} {"(" + data.itemCards.length + ")"}
          </span>
          <span>
            <FaChevronUp />
          </span>
        </div>
        {showItems && <ListItem items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
