import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);

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
                <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg ">
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
