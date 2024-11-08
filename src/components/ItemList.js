import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log(items);

 const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an action
    //Here cart is my action.payload
    //Whatever i pass inside this action will go to reducer function action and that to inside payload.
    dispatch(addItem(item));  //whatever i pass in this will go inside my cart
    // Whenver we dispatch this action redux will create an object and it will create payload in this object and add data to it and then it will pass this object as second argument when we dispatch this action

    // { payload: "cart"}

  }

  return (
    <div>
      {Array.isArray(items) &&
        items.length > 0 &&
        items.map((item) => (
          <div
            key={item?.card?.info?.id ?? item?.itemCards?.[0]?.card?.info?.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>
                  {item?.card?.info?.name ??
                    item?.itemCards?.[0]?.card?.info?.name}
                </span>
                <span>
                  {" "}
                  - ₹
                  {(item?.card?.info?.price ??
                    item?.card?.info?.defaultPrice ??
                    item?.itemCards?.[0]?.card?.info?.price ??
                    item?.itemCards?.[0]?.card?.info?.defaultPrice) / 100}
                </span>
              </div>
              <p>
                {item?.card?.info?.description ??
                  item?.itemCards?.[0]?.card?.info?.description}
              </p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg "
                onClick={() => handleAddItem(item)}>
                  Add +
                </button>
              </div>
              <img
                src={
                  CDN_URL + item?.card?.info?.imageId ||
                  item?.itemCards?.[0]?.card?.info?.imageId
                }
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ItemList;
