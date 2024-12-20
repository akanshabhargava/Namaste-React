import resList from "../utils/mockdata";
import RestraurantCard, { withPromotedLabel } from "./RestraurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestraurants, setListOfRestraurants] = useState([]);
  const [filteredRestraurants, setFilteredRestraurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  //console.log("List of Restraurants", listOfRestraurants);

  const { loggedInUser, setUserName } = useContext(UserContext);
  /*** high order component  */
  const PromotedRestraurantCard = withPromotedLabel(RestraurantCard);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_t"
    );
    //console.log("response=", res);

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
            // value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            data-testid="searchInput"
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
              setFilteredRestraurants(
                listOfRestraurants.filter((list) => list.info.avgRating > 4.2)
              );
            }}
          >
            Top Rated Restraurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label> UserName :</label> &nbsp;
          <input
            className="border border-solid border-black p-2"
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
          />
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
          // <Link
          //   to={`/restraurants/${restraurant.info.id}`}
          //   key={restraurant.info.id}
          // >
          //   {" "}

          //   {/*High Order Component  example*/}
          //   <PromotedRestraurantCard resData={restraurant} />
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
