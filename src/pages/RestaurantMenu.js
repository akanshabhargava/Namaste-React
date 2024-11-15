import React, { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestraurantMenu from "../utils/useRestraurantMenu";
import RestraurantCategory from "../components/RestraurantCategory";
const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState([]);
  const { resId } = useParams();
  const resInfo = useRestraurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   // const data = await fetch(
  //   //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6134806&lng=77.2189594&restaurantId=16865&catalog_qa=undefined&submitAction=ENTER"
  //   // );
  //   const data = await fetch(MENU_API + resId);
  //   const menu = await data.json();
  //   console.log(menu.data.cards);
  //   setResInfo(menu.data.cards);
  // };
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")}-{costForTwoMessage}
      </p>

      {/*categories accordion */}
      {categories.map((category, index) => (
        // <RestraurantCategory
        //   data={category?.card?.card}
        //   key={category?.card?.card.title}

        // />
        <RestraurantCategory
          data={category?.card?.card}
          key={category?.card?.card.title}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {" Rs"}{" "}
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
