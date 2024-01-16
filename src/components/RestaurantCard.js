import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    resData?.restaurants[0]?.info;

  const imageUrl = `${CDN_URL + cloudinaryImageId}`;

  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={imageUrl} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{`${avgRating} Stars`}</h3>
      <h3>{sla.slaString}</h3>
    </div>
  );
};

export default RestaurantCard;
