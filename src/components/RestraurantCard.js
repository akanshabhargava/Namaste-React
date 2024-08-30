import { RES_IMG_BASE_URL } from "../utils/constants";
const RestraurantCard = (props) => {
  // we can alos destructure the props ie {resName,cuisine} insteead of props at the place of parameters and in place of props.resName we can write resName
  //const { resName, cuisine } = props;
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        // src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
        src={RES_IMG_BASE_URL + resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestraurantCard;
