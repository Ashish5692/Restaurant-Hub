import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null); //All cards will be closed

  // const [showIndex, setShowIndex] = useState(0);   One card will always be open that is 0th card

  //   useEffect(() => {
  //     fetchMenu();
  //   }, []);

  //   const fetchMenu = async () => {
  //     const data = await fetch(MENU_API + resId);
  //     const json = await data.json();
  //     setResInfo(json.data);
  //   };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

    console.log(categories)
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordian */}
      {categories.map((category, index) => (
        //controlled component
      <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index === showIndex ? true : false}
       setShowIndex={() => setShowIndex(index)} />
      //  Now we can pass this function and it will set the showIndex of that particular index and we can pass this feature to its children
    ))}
    </div>
  );
};

export default RestaurantMenu;
