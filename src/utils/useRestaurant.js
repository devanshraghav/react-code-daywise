import { useState , useEffect } from "react";

const useRestaurant = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.351793&lng=78.0095493&restaurantId=${resId}&submitAction=ENTER`
    );
    const json = await data.json();
    // console.log(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(json?.data?.cards[0]?.card?.card?.info);
  }

  return restaurantMenu;
};

export default useRestaurant;
