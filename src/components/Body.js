import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local state variable
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.restaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant({ restaurants: filteredList });
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={{ restaurants: [restaurant] }}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
