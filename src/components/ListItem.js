import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { SWIGGY_IMAGE_URL } from "../utils/constants";
import { FaRegCircleStop } from "react-icons/fa6";

const ListItem = (props) => {
  const { items } = props;

  const dispatch = useDispatch();
  const addItemHandler = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div className="flex justify-between" key={item.card.info.id}>
            <div
              className="border-gray-300 border-b-[1px] p-2 m-2 text-left flex w-full"
            >
              <div className="flex justify-between w-full">
                <div className="flex flex-col border-slate-900">
                  <div className="font-semibold text-sm cursor-pointer">
                    <div>
                      {item.card.info.itemAttribute.vegClassifier ===
                      "NONVEG" ? (
                        <FaRegCircleStop className="text-red-600" />
                      ) : (
                        <FaRegCircleStop className="text-green-600" />
                      )}
                    </div>
                    {item.card.info.name}
                  </div>
                  <div className="font-semibold text-sm mt-2">
                    ₹
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </div>
                  <p className="text-xs mt-1">{item.card.info.description}</p>
                </div>
                
                <div className="cursor-pointer border-slate-900">
                  <div className="absolute mx-auto">
                    <button className="p-[3px] font-semibold bg-black text-white rounded-md shadow-lg opacity-60"
                      onClick={() => addItemHandler(item)}
                    >
                      Add +
                    </button>
                  </div>
                  <img
                    className="h-[100px] min-w-[120px] max-w-[120px] rounded-md"
                    src={SWIGGY_IMAGE_URL + item.card.info.imageId}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListItem;
