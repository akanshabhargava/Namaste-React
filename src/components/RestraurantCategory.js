import React, { useState } from "react";
import ItemList from "./ItemList";

const RestraurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    //  setShowItems((showItems) => !showItems);
    setShowIndex();
  };
  return (
    <div className="w-6/12 bg-gray-50 p-4 shadow-lg mx-auto my-4">
      {/* Accordion Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span>⬇</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestraurantCategory;
