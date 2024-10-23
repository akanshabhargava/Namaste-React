import resList from "../utils/mockdata";
import RestraurantCard from "./RestraurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline !! Please check your internet connection
      </h1>
    );
  }
  //Conditional Rendering
  if (listOfRestraurants.length === 0) {
    return <Shimmer />;
  }
  return listOfRestraurants === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
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
        <div className="p-4 m-4">
          <button
            className="px-4 py-2 m-4 bg-gray-100 rounded-lg"
            onClick={() => {
              setListOfRestraurants((prevList) => {
                return prevList.filter((list) => list.info.avgRating > 4.2);
              });
            }}
          >
            Top Rated Restraurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
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
          <Link
            to={`/restraurants/${restraurant.info.id}`}
            key={restraurant.info.id}
          >
            {" "}
            <RestraurantCard resData={restraurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
