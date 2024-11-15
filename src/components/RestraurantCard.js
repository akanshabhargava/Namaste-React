import { RES_IMG_BASE_URL } from "../utils/constants";
const RestraurantCard = (props) => {
  // we can alos destructure the props ie {resName,cuisine} insteead of props at the place of parameters and in place of props.resName we can write resName
  //const { resName, cuisine } = props;
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        alt="res-logo"
        className="rounded-lg"
        // src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
        src={RES_IMG_BASE_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="break-words">{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

/* High Order Component */
export const withPromotedLabel = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestraurantCard {...props} />
      </div>
    );
  };
};
export default RestraurantCard;
