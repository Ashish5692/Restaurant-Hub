import React, { useState } from "react";
import ItemList from "./ItemList";

//this Restaurant Category is a controlled component
const RestaurantCategory = ({ data , showItems, setShowIndex}) => {

  //console.log(data);

  const handleClick = () => {
    setShowIndex();  //It will show itself when we click on it.
  }


  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      {/* Header */}
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data?.title} ({data?.itemCards?.length}{data?.categories?.length})
        </span>
        <span>⬇</span>
        {/* Accordian Body */}
        
      </div>

      { showItems && <ItemList items={data.itemCards || data.categories} /> }
      
    </div>
  );
};

export default RestaurantCategory;
