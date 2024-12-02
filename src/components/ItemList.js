import React from "react";
import { RES_IMG_BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log(items);
  const dispatch = useDispatch();
  
  const handleItemClick = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>

              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 1000
                  : item.card.info.defaultPrice / 1000}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-40 p-4 w-3/12">
            <div className="absolute">
              <button
                className=" p-2 mx-4 text-white bg-black rounded-lg shadow-lg"
                onClick={() => handleItemClick(item)}
              >
                Add +
              </button>
            </div>
            <img src={RES_IMG_BASE_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
