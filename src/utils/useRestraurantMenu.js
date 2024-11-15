import { MENU_API } from "./constants";
import { useState, useEffect } from "react";
const useRestraurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const menu = await data.json();
    console.log(menu.data);
    setResInfo(menu.data);
  };
  return resInfo;
};

export default useRestraurantMenu;
