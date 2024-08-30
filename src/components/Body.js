import resList from "../utils/mockdata";
import RestraurantCard from "./RestraurantCard";
import { useState } from "react";
const Body = () => {
  const [listOfRestraurants, setListOfRestraurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestraurants((prevList) => {
              return prevList.filter((list) => list.info.avgRating > 4.2);
            });
          }}
        >
          Top Rated Restraurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestraurantCard
            resName="Pizza Doords"
            cuisine="Biryani,Chinese,Italian"
          />
          <RestraurantCard resName="KFC" cuisine="Pizza" /> */}
        {/* <RestraurantCard resData={resList[0]} />
          <RestraurantCard resData={resList[1]} />
          <RestraurantCard resData={resList[2]} />
          <RestraurantCard resData={resList[3]} />
          <RestraurantCard resData={resList[4]} />
          <RestraurantCard resData={resList[5]} />
          <RestraurantCard resData={resList[6]} />
          <RestraurantCard resData={resList[7]} /> */}
        {listOfRestraurants.map((restraurant) => (
          <RestraurantCard key={restraurant.info.id} resData={restraurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
