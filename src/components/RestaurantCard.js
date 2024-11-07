import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    resData?.restaurant[0]?.info;

  const imageUrl = `${CDN_URL + cloudinaryImageId}`;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-100">
      <img className="rounded-lg mb-3" alt="res-logo" src={imageUrl} />
      <h3 className="font-semibold text-lg mb-3">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{`${avgRating} Stars`}</h3>
      <h3>{sla?.slaString}</h3>
    </div>
  );
};

export default RestaurantCard;
