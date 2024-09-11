import React, { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6134806&lng=77.2189594&restaurantId=16865&catalog_qa=undefined&submitAction=ENTER"
    // );
    const data = await fetch(MENU_API + resId);
    const menu = await data.json();
    console.log(menu.data.cards);
    setResInfo(menu.data.cards);
  };
  if (resInfo.length === 0) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } = resInfo[2]?.card?.card?.info;
  const { itemCards } =
    resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {" Rs"}{" "}
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
