import React, { useEffect, useState, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local state variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");


  // Fetch data from API on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3556809&lng=76.954224&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();

      const restaurantData =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      console.log(restaurantData);

      setListOfRestaurants(restaurantData);
      setFilteredRestaurants(restaurantData);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error appropriately, show error message, retry mechanism, etc.
    }
  };

  // Filter restaurants based on search text
  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurant);
  };

  // Filter top rated restaurants
  const handleFilterTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.3
    );
    setFilteredRestaurants(filteredList);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus ===false){
    return (
      <h1>
        Check Your Internet Connectivity!!
      </h1>
    )
  }

  const {loggedInUser, setUserName} = useContext(UserContext)

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="px-4 py-1 bg-green-100 m-2 rounded-lg" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center gap-2">
        <button className="filter-btn px-4 py-1 bg-gray-100 rounded-lg" onClick={handleFilterTopRated}>
          Top Rated Restaurants
        </button>
        <label>Username : </label>
        <input className="border border-black p-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
        </div>  
        
      </div>
      <div className="flex flex-wrap">
        {listOfRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              className="res-cards"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={{ restaurant: [restaurant] }} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
