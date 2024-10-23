import { MENU_API } from "./constants";
const useRestraurantMenu=(resId)=>{
const [resInfo,setResInfo]=useState(null);
useEffect(()=>{
fetchMenu();
},[]);

const fetchMenu=async()=>{
    const data = await fetch(MENU_API + resId);
    const menu = await data.json();
    setResInfo(menu.data);
}
    return resInfo;
};

export default useRestraurantMenu;