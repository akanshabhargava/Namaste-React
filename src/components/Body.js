import resList from "../utils/mockdata";
import RestraurantCard from "./RestraurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestraurants, setListOfRestraurants] = useState([]);
  const [filteredRestraurants, setFilteredRestraurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_t"
    );
    console.log("response=", res);
    const result = await res.json();
    //console.log(data.cards[4].card.card.gridElements.restraurants);
    console.log(
      result.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestraurants(
      result?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestraurants(
      result?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  //Conditional Rendering
  if (listOfRestraurants.length === 0) {
    return <Shimmer />;
  }
  return listOfRestraurants === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              setFilteredRestraurants(
                listOfRestraurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRestraurants.map((restraurant) => (
          <RestraurantCard key={restraurant.info.id} resData={restraurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
